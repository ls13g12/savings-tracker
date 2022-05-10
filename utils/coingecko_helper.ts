import { Coin } from '../types/Coin'

interface Data {
    coins: Coin[]
}

const search = async (string: string): Promise<Coin[] | undefined> => {
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${string}`)
        const data = <Data> await response.json()
        return data.coins
    }
    catch(error){
        console.log(error)
    }
}

const filterByMarketCapRank = (coins: Coin[], marketCapRank: number): Coin[] => {
    return coins.filter((coin: Coin) => coin && coin.market_cap_rank && coin.market_cap_rank < marketCapRank)
}

const coingecko = {
    search,
    filterByMarketCapRank
}

export default coingecko
