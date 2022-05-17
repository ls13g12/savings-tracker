import {Schema, model} from "mongoose";

export const baseOptions = { 
    discriminatorKey: 'assettype',
    collection: 'assets'
};

interface IBaseAsset {
    name: string
    datePurchased: Date
    dateUpdated: Date
}

const baseAssetSchema = new Schema<IBaseAsset>({
    name: String,
    datePurchased: Date,
    dateUpdated: Date
}, baseOptions)

const BaseAsset = model<IBaseAsset>('Asset', baseAssetSchema)

export default BaseAsset
