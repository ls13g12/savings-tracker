import {Schema} from "mongoose";
import BaseAsset from "./Asset";
import {baseOptions} from "./Asset";

interface ICryptoAsset {
    id: string,
    symbol: string,
    buyPrice: number,
    quantity: number
}

const CryptoAsset = BaseAsset.discriminator('CryptoAsset', new Schema<ICryptoAsset>({
    id: String,
    symbol: String,
    buyPrice: Number,
    quantity: Number
}, baseOptions))

export default CryptoAsset
