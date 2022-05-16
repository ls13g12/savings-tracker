import { Coin, CoingeckoSearchJSON} from '../types/Coin'

export const searchCoingecko = async (string: string): Promise<Coin[]> => {
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${string}`)
        const data = <CoingeckoSearchJSON> await response.json()
        return data.coins
    }
    catch(error){
        console.log(error)
        throw(error)
    }
}

export const filterCoinsByMarketCapRank = (coins: Coin[], marketCapRank: number): Coin[] => {
    return coins.filter((coin: Coin) => coin && coin.market_cap_rank && coin.market_cap_rank < marketCapRank)
}
