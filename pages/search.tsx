import { useState } from 'react';

const Search = () => {
    const [newCoin, setNewCoin] = useState('')
    const [coins, setCoins] = useState([])

    const handleNewCoin = async (event: any) => {

        setNewCoin(event.target.value)

        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${newCoin}`)
        const data = await response.json()

        //filter coins which have a market cap which is not null and less than 100
        const filteredCoins = data.coins.filter((coin: Coin) => coin.market_cap_rank && coin.market_cap_rank < 100)
        
        setCoins(filteredCoins)
    }

    return (
        <div>
            <form>
                <label>Search: </label>
                <input
                    onChange={handleNewCoin}
                    value={newCoin}
                />
            </form>
            <div>
                <ul>
                {coins.map((coin: Coin) => (
                    <li key={coin.id}>{coin.id}</li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export interface Coin {
    id: string
    market_cap_rank: number
}

export default Search;