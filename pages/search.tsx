import React, { useState, useEffect } from 'react';
import searchCoingecko from '../utils/coingecko_helper';
import { Coin } from '../types/Coin';

const Search = () => {
    const [newCoin, setNewCoin] = useState<string>('')
    const [coins, setCoins] = useState<Coin[]>()
    const [message, setMessage] = useState<string>('')

    useEffect(() => {   
        const searchCoin = async () => {
            const filteredCoins = await searchCoingecko(newCoin)
            //only show 10 or fewer coins
            if (filteredCoins && filteredCoins.length <= 20){
                setCoins(filteredCoins)
                setMessage('Here are your coins!')
            }
            else {
                setMessage('Refine your search')
                setCoins([])
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
                    <li key={coin.id}>{coin.id}</li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;