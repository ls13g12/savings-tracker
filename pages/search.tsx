import React, { useState, useEffect } from 'react';
import coingecko from '../utils/coingecko_helper';
import { Coin } from '../types/Coin';

const Search = () => {
    const [newCoin, setNewCoin] = useState<string>('')
    const [coins, setCoins] = useState<Coin[]>()
    const [message, setMessage] = useState<string>('')

    useEffect(() => {   
        const searchCoin = async () => {
            const searchedCoins = await coingecko.search(newCoin)

            //marketcap limit currently hardcoded - feature for user to select?
            if (searchedCoins){
                const filteredCoins: Coin[] = coingecko.filterByMarketCapRank(searchedCoins as Coin[], 200)

                //only show 20 or fewer coins  - currently hardcoded
                if (filteredCoins.length <= 5){
                    setCoins(filteredCoins)
                    setMessage('Here are your coins!')
                }
                else {
                    setMessage('Refine your search')
                    setCoins([])
                }
            }
        }
        searchCoin()
    }, [newCoin])

    const handleNewCoin = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewCoin(event.target.value)
    }

    return (
        <div>
            <h3>{message}</h3>
            <form>
                <label>Search: </label>
                <input
                    onChange={handleNewCoin}
                    value={newCoin}
                />
            </form>
            <div>
                <ul>
                {coins?.map((coin: Coin) => (
                    <li key={coin.id}>{coin.id} - rank: {coin.market_cap_rank}</li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;
