import {Schema, model, models} from "mongoose";

interface ICryptoAsset{
  name: string
  datePurchased: Date
  dateUpdated: Date
  coingecko_id: string,
  coingecko_symbol: string,
  buyPrice: number,
  quantity: number
}

const cryptoAssetSchema = new Schema<ICryptoAsset>({
  name: String,
  datePurchased: Date,
  dateUpdated: Date,
  coingecko_id: String,
  coingecko_symbol: String,
  buyPrice: Number,
  quantity: Number
})

export default models.CryptoAsset || model<ICryptoAsset>('CryptoAsset', cryptoAssetSchema)

