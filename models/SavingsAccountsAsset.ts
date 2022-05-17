import {Schema} from "mongoose";
import BaseAsset from "./Asset";
import {baseOptions} from "./Asset";

interface ISavingsAccountAsset {
    balance: number,
    apy: number
}

const SavingsAccountAsset = BaseAsset.discriminator('SavingsAccountAsset', new Schema<ISavingsAccountAsset>({
    balance: Number,
    apy: Number
}, baseOptions))

export default SavingsAccountAsset
