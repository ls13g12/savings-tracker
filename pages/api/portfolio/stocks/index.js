import dbConnect from '../../../../lib/dbConnect'
import StocksAsset from '../../../../models/StocksAsset'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const stocksAssets = await StocksAsset.find({})
        res.status(200).json({ success: true, data: stocksAssets})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const newAsset = await StocksAsset.create(
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
