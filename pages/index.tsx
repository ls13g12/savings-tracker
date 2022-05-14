import Head from 'next/head'
import Asset from '../components/Asset'
import {AssetData} from '../types/Asset'


export default function Home(){

    const MOCK_ASSETS = [{
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
    }]

    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <div>
                {MOCK_ASSETS.map((asset) => (
                    <Asset key={asset.id} 
                        id={asset.id} 
                        symbol={asset.symbol}
                        name={asset.name}
                        quantity={asset.quantity}
                        buyPrice={asset.buyPrice}                        
                        />
                ))}
            </div>
        </main>
        </div>
    )
}
