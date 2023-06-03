// import { useRouter } from 'next/router';
import dbConnect from 'lib/dbConnect'
import Asset from 'models/Asset'
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
        const foundAsset = await Asset.findOne({_id: pid})
        res.status(200).json({ success: true, data: foundAsset})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      
    case 'PUT':
      try {
        const asset = await Asset.findOne({_id: pid})
        const body = req.body

        const resp = await AssetHistory.create({
          assetId: asset._id,
          name: asset.name,
          value: asset.value,
          dateAdded: asset.dateUpdated
        })
        //Only update if different
        const updatedAsset = await Asset.findOneAndUpdate({_id: pid}, {
          value: body.value ? body.value : asset.value,
          dateUpdated: body.dateUpdated ? body.dateUpdated : asset.dateUpdated,
          description: body.description ? body.description : asset.description
        })

        res.status(200).json({ success: true, data: updatedAsset})
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
