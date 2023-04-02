import { useRouter } from 'next/router';
import assetStyles from '../styles/Asset.module.css'
import { Asset } from '../types/Asset'
var moment = require('moment'); 

const AssetCard = ({_id, name, description, value, dateUpdated}: Asset) => {
    const router = useRouter();
  
    return(
        <div className={assetStyles.container} onClick={() => 
          router.push({
          pathname: '/assets/[pid]',
          query: { pid: _id },
        })}>
            <div className={assetStyles.name}>{name}</div>
            <div>{description}</div>
            <div>₤{value}</div>
            {dateUpdated && <div>{moment(dateUpdated).format('MMMM, DD yyyy')}</div>}
            {!dateUpdated && <div>no date</div>}
        </div>
    )
}

export default AssetCard;
