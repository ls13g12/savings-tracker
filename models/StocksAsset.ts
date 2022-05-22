import {Schema, model, models} from "mongoose";

interface IStocksAsset{
  name: string
  datePurchased: Date
  dateUpdated: Date
  id: string,
  buyPrice: number,
  quantity: number
}

const stocksAssetSchema = new Schema<IStocksAsset>({
  name: String,
  datePurchased: Date,
  dateUpdated: Date,
  id: String,
  buyPrice: Number,
  quantity: Number
})

export default models.StocksAsset || model<IStocksAsset>('StocksAsset', stocksAssetSchema)
