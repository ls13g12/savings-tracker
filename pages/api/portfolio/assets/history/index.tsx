
import dbConnect from 'lib/dbConnect'
import AssetHistory from 'models/AssetHistory'

export default async function handler(req: any, res: any) {
  const { method } = req
  
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const foundAssets = await AssetHistory.find()
        res.status(200).json({ success: true, data: foundAssets})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      
    case 'DELETE':
      try {
        const body = req.body
        if (body.IdToDelete){
          const resp = await AssetHistory.deleteOne({_id: body.IdToDelete})
          res.status(201).end()
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
