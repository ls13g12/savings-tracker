import {Schema, model, models} from "mongoose";

interface IAsset{
  name: String
  description: String
  dateUpdated: Date
  value: Number
}

const AssetSchema = new Schema<IAsset>({
  name: String,
  description: String,
  dateUpdated: Date,
  value: Number,
})

export default models.Asset || model<IAsset>('Asset', AssetSchema)
