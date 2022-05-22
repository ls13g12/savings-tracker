import {Schema, model, models} from "mongoose";

interface ISavingsAccountAsset{
  name: string
  datePurchased: Date
  dateUpdated: Date
  balance: number,
  apy: number
}

const savingsAccountAssetSchema = new Schema<ISavingsAccountAsset>({
  name: String,
  datePurchased: Date,
  dateUpdated: Date,
  balance: Number,
  apy: Number
})

export default models.SavingsAccountAsset || model<ISavingsAccountAsset>('SavingsAccountAsset', savingsAccountAssetSchema)

