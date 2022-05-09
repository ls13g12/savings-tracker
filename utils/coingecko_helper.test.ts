import coingecko from "../utils/coingecko_helper"
import { Coin, CoingeckoSearchJSON } from '../types/Coin'

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
    },
    {
      "id": "3x-short-tezos-token",
      "name": "3X Short Tezos Token",
      "symbol": "XTZBEAR",
      "market_cap_rank": null,
      "thumb": "https://assets.coingecko.com/coins/images/10175/thumb/683JEXMN_400x400_%281%29.png",
      "large": "https://assets.coingecko.com/coins/images/10175/large/683JEXMN_400x400_%281%29.png"
    },
    {
      "id": "1x-short-tezos-token",
      "name": "1X Short Tezos Token",
      "symbol": "XTZHEDGE",
      "market_cap_rank": null,
      "thumb": "https://assets.coingecko.com/coins/images/12047/thumb/683JEXMN_400x400.png",
      "large": "https://assets.coingecko.com/coins/images/12047/large/683JEXMN_400x400.png"
    }
  ]
}


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
})) as jest.Mock;


describe("test coingecko api search", () => {
    it("should return a list of coins", async () => {
        await expect(coingecko.search('tezos')).resolves.not.toHaveLength(0)
    })
})

describe("test filter by market cap rank", () => {
    it("should filter the list down to length one", () => {
        expect(coingecko.filterByMarketCapRank(MOCK_DATA.coins, 100)).toHaveLength(1)
    })
    it("should show the id as tezos", () => {
        expect(coingecko.filterByMarketCapRank(MOCK_DATA.coins, 100)[0].id).toBe('tezos')
    })
    it("should show the market rank cap as less than 100", () => {
        expect(coingecko.filterByMarketCapRank(MOCK_DATA.coins, 100)[0].market_cap_rank).toBeLessThan(100)
    })
})