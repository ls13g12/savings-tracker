import assetStyles from '../styles/Asset.module.css'
import coingecko from '../utils/coingecko_helper'
import { AssetData } from '../types/Asset'
import { useEffect, useState } from 'react'


const Asset = ({id, symbol, name, quantity, buyPrice } : AssetData) => {
    const [currPrice, setCurrPrice] = useState<number | undefined>(0)
    const [currValue, setCurrValue] = useState<number | undefined>(0)
    const buyValue = quantity * buyPrice
    
    //sets current price for asset using coingecki api call upon page load
    useEffect(() => {
        const getCurrPrice = async() => {
            const price = await coingecko.getValue(id)
            setCurrPrice(price)
        }
        getCurrPrice()
    }, [])

    //calculates current value of user held asset to display
    //updates upon change in quantity or currPrice
    useEffect(() => {
        const loadCurrValue = () => {
            if (currPrice){
                setCurrValue(quantity*currPrice)
            }
        }
        loadCurrValue()
    }, [quantity, currPrice])



    return(
        <div className={assetStyles.container}>
            <div className={assetStyles.name}>{name}</div>
            <div>£{currValue?.toFixed(2)}</div>
            <div>{quantity} {symbol}</div>
            <div>bought for £{buyValue?.toFixed(2)}</div>
        </div>
    )
}


export default Asset;
