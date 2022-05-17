import { CoingeckoPriceJSON } from "../types/Coin"

//returns gbp value of coin from coingecko
export const getCoinPriceFromCoingecko = async (id: string): Promise<number> => {
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=gbp`)
        const data = <CoingeckoPriceJSON> await response.json()
        return data[id]['gbp']
    }
    catch(error){
        console.log(error)
        throw(error)
    }
}
