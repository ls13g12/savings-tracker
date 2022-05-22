import dbConnect from '../../../lib/dbConnect'
import SavingsAccountAsset from '../../../models/SavingsAccountAsset'
import CryptoAsset from '../../../models/CryptoAsset'
import StocksAsset from '../../../models/StocksAsset'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const savingsAccountAssets = await SavingsAccountAsset.find({})
        const stocksAssets = await StocksAsset.find({})
        const cryptoAssets = await CryptoAsset.find({})
        res.status(200).json({ success: true, data: 
          { 
            savingsAccountAssets: savingsAccountAssets,
            stocksAssets: stocksAssets,
            cryptoAssets: cryptoAssets
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
