import searchCoingecko from "../utils/coingecko_helper"
import { Coin } from '../types/Coin'

const MOCK_COINS = <Coin[]>[
    { 
        id: 'tezos',
        market_cap_rank: 20
    }, 
    {  
        id: 'bitcoin',
        market_cap_rank: 1
    }
]


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_COINS)
})) as jest.Mock;


describe("test coingecko api search", () => {
    it("should return a list of coins", () => {
    expect.assertions(2)
    const data = searchCoingecko("bitcoin")
    expect(data).resolves.not.toBe(null)
    //expect(data).resolves.toBe(MOCK_COINS)
    })

})