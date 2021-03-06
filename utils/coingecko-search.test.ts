import { searchCoingecko, filterCoinsByMarketCapRank } from "./coingecko-search"
import { CoingeckoSearchJSON } from '../types/Coin'

const MOCK_DATA = <CoingeckoSearchJSON>{
  "coins": [
    {
      "id": "tezos",
      "name": "Tezos",
      "symbol": "XTZ",
      "market_cap_rank": 49,
      "thumb": "https://assets.coingecko.com/coins/images/976/thumb/Tezos-logo.png",
      "large": "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png"
    },
    {
      "id": "3x-long-tezos-token",
      "name": "3X Long Tezos Token",
      "symbol": "XTZBULL",
      "market_cap_rank": null,
      "thumb": "https://assets.coingecko.com/coins/images/10254/thumb/683JEXMN_400x400_%281%29.png",
      "large": "https://assets.coingecko.com/coins/images/10254/large/683JEXMN_400x400_%281%29.png"
    }
  ]
}

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
})) as jest.Mock;


describe("test coingecko api search", () => {
    it("should return a list of coins", async () => {
        await expect(searchCoingecko('tezos')).resolves.not.toHaveLength(0)
    })
})

describe("test filter by market cap rank", () => {
    it("should filter the list down to length one", () => {
        expect(filterCoinsByMarketCapRank(MOCK_DATA.coins, 100)).toHaveLength(1)
    })
    it("should show the id as tezos", () => {
        expect(filterCoinsByMarketCapRank(MOCK_DATA.coins, 100)[0].id).toBe('tezos')
    })
    it("should show the market rank cap as less than 100", () => {
        expect(filterCoinsByMarketCapRank(MOCK_DATA.coins, 100)[0].market_cap_rank).toBeLessThan(100)
    })
})
