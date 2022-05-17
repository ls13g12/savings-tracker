import Head from 'next/head'
import Asset from '../components/Asset'
import { AssetData } from '../types/Asset'
import MOCK_ASSETS from '../utils/mock-data'


export default function Home(){

    const assets: AssetData[] = MOCK_ASSETS
    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <div>
                {assets.map((asset) => (
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
