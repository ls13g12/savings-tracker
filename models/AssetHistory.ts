import {Schema, model, models} from "mongoose";

interface IAssetHistory{
  assetId: String
  name: String
  dateAdded: Date
  value: Number
}

const AssetHistorySchema = new Schema<IAssetHistory>({
  assetId: String,
  name: String,
  dateAdded: Date,
  value: Number,
})

export default models.AssetHistory || model<IAssetHistory>('AssetHistory', AssetHistorySchema)
