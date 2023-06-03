// import { useRouter } from 'next/router';
import dbConnect from 'lib/dbConnect'
import AssetHistory from 'models/AssetHistory'
import { SingleAssetProps } from 'types/Asset'

export default async function handler(req: any, res: any) {
  const { method } = req
  const { pid } = req.query
  // const router = useRouter();
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const foundAssets = await AssetHistory.find({assetId: pid})
        res.status(200).json({ success: true, data: foundAssets})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      
    case 'DELETE':
      try {
        await AssetHistory.deleteOne({_id: pid})
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
