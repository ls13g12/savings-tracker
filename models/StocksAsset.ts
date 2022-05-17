import {Schema} from "mongoose";
import BaseAsset from "./BaseAsset";
import {baseOptions} from "./BaseAsset";

interface IStocksAsset {
    id: string,
    buyPrice: number,
    quantity: number
}

const StocksAsset = BaseAsset.discriminator('StocksAsset', new Schema<IStocksAsset>({
    id: String,
    buyPrice: Number,
    quantity: Number
}, baseOptions))

export default StocksAsset
