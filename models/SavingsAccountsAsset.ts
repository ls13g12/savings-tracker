import {Schema} from "mongoose";
import BaseAsset from "./BaseAsset";
import {baseOptions} from "./BaseAsset";

interface ISavingsAccountAsset {
    balance: number,
    apy: number
}

const SavingsAccountAsset = BaseAsset.discriminator('SavingsAccountAsset', new Schema<ISavingsAccountAsset>({
    balance: Number,
    apy: Number
}, baseOptions))

export default SavingsAccountAsset
