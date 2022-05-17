import {Schema} from "mongoose";
import BaseAsset from "./BaseAsset";
import {baseOptions} from "./BaseAsset";

interface ICryptoAsset {
    coingecko_id: string,
    coingecko_symbol: string,
    buyPrice: number,
    quantity: number
}

const CryptoAsset = BaseAsset.discriminator('CryptoAsset', new Schema<ICryptoAsset>({
    coingecko_id: String,
    coingecko_symbol: String,
    buyPrice: Number,
    quantity: Number
}, baseOptions))

export default CryptoAsset
