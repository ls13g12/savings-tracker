import assetStyles from '../styles/Asset.module.css'

const Asset = ({name, quantity, currPrice, buyPrice, }) => {
    return(
        <div className={assetStyles.container}>
            <div className={assetStyles.name}>{name}</div>
            <div>{currPrice}</div>
            <div>{quantity}</div>
            <div>bought for {buyPrice}</div>
        </div>
    )
}

export default Asset;