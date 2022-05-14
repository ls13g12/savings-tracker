export interface Coin {
    id: string
    symbol: string,
    name: string,
    market_cap_rank: number
    thumb: string
    large: string
}

export interface CoingeckoSearchJSON {
    coins: Coin[]
}

export interface CoingeckoPriceJSON {
    [id: string] : {
        [gbp: string]: number
    }
}


