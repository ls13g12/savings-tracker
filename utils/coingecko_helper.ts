import { Coin, CoingeckoSearchJSON, CoingeckoPriceJSON } from '../types/Coin'

const search = async (string: string): Promise<Coin[] | undefined> => {
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${string}`)
        const data = <CoingeckoSearchJSON> await response.json()
        return data.coins
    }
    catch(error){
        console.log(error)
    }
}

const filterByMarketCapRank = (coins: Coin[], marketCapRank: number): Coin[] => {
    return coins.filter((coin: Coin) => coin && coin.market_cap_rank && coin.market_cap_rank < marketCapRank)
}

//returns gbp value of coin from coingecko
const getValue = async (id: string): Promise<number | undefined> => {
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=gbp`)
        const data = <CoingeckoPriceJSON> await response.json()
        return data[id]['gbp']
    }
    catch(error){
        console.log(error)
    }
}
const coingecko = {
    search,
    filterByMarketCapRank,
    getValue
}

export default coingecko
