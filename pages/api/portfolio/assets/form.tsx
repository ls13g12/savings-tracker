import Asset from '../../../../models/Asset'
import dbConnect from '../../../../lib/dbConnect'

export default async function handler(req, res) {
  const body = req.body
  console.log('body: ', body)

  if (!body.name) {
    return res.status(400).json({ data: 'name not found' })
  }

  await dbConnect()

  try {
    const newAsset = await Asset.create(
      req.body
    )
    res.status(201).json({ success: true, data: newAsset })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
