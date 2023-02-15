import dbConnect from '../../../lib/dbConnect'
import Asset from '../../../models/Asset'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const Assets = await Asset.find({})
        console.log(Assets)
        res.status(200).json({ success: true, data: 
          { 
            Assets: Assets
          }
        })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
