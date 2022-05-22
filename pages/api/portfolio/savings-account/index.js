import dbConnect from '../../../../lib/dbConnect'
import SavingsAccountAsset from '../../../../models/SavingsAccountAsset'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const savingsAccountAssets = await SavingsAccountAsset.find({})
        res.status(200).json({ success: true, data: savingsAccountAssets})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const newAsset = await SavingsAccountAsset.create(
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
