import { getCoinPriceFromCoingecko } from "./coingecko-price"
import { CoingeckoPriceJSON } from '../types/Coin'

const MOCK_DATA = <CoingeckoPriceJSON>{
    "tezos": {
        "gbp": 1.46
    }
}

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
})) as jest.Mock;


describe("test coingecko api price check", () => {
    it("should return the gbp value", async () => {
        await expect(getCoinPriceFromCoingecko('tezos')).resolves.toBe(1.46)
    })
})
