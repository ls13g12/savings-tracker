import { Coin } from '../types/Coin'

interface Data {
    coins: Coin[]
}

const searchCoingecko = async (string: string): Promise<Coin[] | undefined> => {
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${string}`)
        const data = <Data> await response.json()
        return data.coins
    }
    catch(error){
        console.log(error)
    }
}

export default searchCoingecko