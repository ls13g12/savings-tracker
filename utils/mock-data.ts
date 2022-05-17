import {AssetData} from '../types/Asset'
    
const MOCK_ASSETS: AssetData[] = [{
        id: 'tezos',
        symbol: 'xtz',
        name: 'Tezos',
        quantity: 120,
        buyPrice: 3.00
    },
    {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        quantity: 0.1,
        buyPrice: 20000
    }
]

export default MOCK_ASSETS
