import Head from 'next/head'
import Asset from '../components/Asset'
import {AssetData} from '../types/Asset'


export default function Home(){

    const MOCK_ASSETS = [{
        name: 'tezos',
        quantity: 100,
        buyPrice: 200,
        currPrice: 300
    },
    {
        name: 'bitcoin',
        quantity: 0.01,
        buyPrice: 20000,
        currPrice: 30000
    }]

    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <div>
                {MOCK_ASSETS.map((asset) => (
                    <Asset name={asset.name} quantity={asset.quantity} currPrice={asset.currPrice} buyPrice={asset.buyPrice}/>
                ))}
            </div>
        </main>
        </div>
    )
}
