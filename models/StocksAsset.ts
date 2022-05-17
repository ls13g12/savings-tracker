import {Schema} from "mongoose";
import BaseAsset from "./Asset";
import {baseOptions} from "./Asset";

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
