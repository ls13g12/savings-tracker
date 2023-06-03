import dbConnect from 'lib/dbConnect'
import Asset from 'models/Asset'
import AssetHistory from 'models/AssetHistory'

export default async function handler(req: any, res: any) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const Assets = await Asset.find({})
        res.status(200).json({ success: true, data: Assets})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const newAsset = await Asset.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: newAsset })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
