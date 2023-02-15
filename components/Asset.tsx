import assetStyles from '../styles/Asset.module.css'
import { getCoinPriceFromCoingecko } from '../utils/coingecko-price'
import { Asset } from '../types/Asset'
import { useEffect, useState } from 'react'

const Asset = ({name, description, value, dateUpdated}: Asset) => {

    return(
        <div className={assetStyles.container}>
            <div className={assetStyles.name}>{name}</div>
            <div>{description}</div>
            <div>{value}</div>
            <div>{dateUpdated}</div>
        </div>
    )
}


// const Asset = ({coingecko_id, coingecko_symbol, name, quantity, buyPrice }: CryptoAsset) => {
//     const [currPrice, setCurrPrice] = useState<number>(0)
//     const [currValue, setCurrValue] = useState<number>(0)
//     const buyValue = quantity * buyPrice
    
//     //sets current price for asset using coingecki api call upon page load
//     useEffect(() => {
//         const getCurrPrice = async() => {
//             const price = await getCoinPriceFromCoingecko(coingecko_id)
//             setCurrPrice(price)
//         }
//         getCurrPrice()
//     }, [coingecko_id])

//     //calculates current value of user held asset to display
//     //updates upon change in quantity or currPrice
//     useEffect(() => {
//         const loadCurrValue = () => {
//             if (currPrice){
//                 setCurrValue(quantity*currPrice)
//             }
//         }
//         loadCurrValue()
//     }, [quantity, currPrice])



//     return(
//         <div className={assetStyles.container}>
//             <div className={assetStyles.name}>{name}</div>
//             <div>£{currValue?.toFixed(2)}</div>
//             <div>{quantity} {coingecko_symbol}</div>
//             <div>bought for £{buyValue?.toFixed(2)}</div>
//         </div>
//     )
// }


export default Asset;
