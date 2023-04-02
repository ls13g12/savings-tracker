// import { useRouter } from 'next/router';
import dbConnect from '../../../../lib/dbConnect'
import Asset from '../../../../models/Asset'

export default async function handler(req, res) {
  const { method } = req
  const { pid } = req.query
  // const router = useRouter();
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const foundAsset = await Asset.findOne({_id: pid})
        res.status(200).json({ success: true, data: foundAsset})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        await Asset.deleteOne({_id: pid})
        res.status(201).end()
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
