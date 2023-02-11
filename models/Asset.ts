import {Schema, model, models} from "mongoose";

interface IValueHistoryEntry{
  value: Number
  date: Date
}

interface IAsset{
  name: String
  description: String
  dateUpdated: Date
  value: Number
  valueHistory: [IValueHistoryEntry]
}

const ValueHistoryEntry = new Schema<IValueHistoryEntry>({
  value: Number,
  date: Date
})

const AssetSchema = new Schema<IAsset>({
  name: String,
  description: String,
  dateUpdated: Date,
  value: Number,
  valueHistory: [ValueHistoryEntry]
})

export default models.Asset || model<IAsset>('Asset', AssetSchema)
