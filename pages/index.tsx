import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

export default function Home({ coins }: InferGetStaticPropsType<typeof getStaticProps>){
    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <h1>Hello World</h1>
            <div>
                {coins.map((coin: Coin) => (
                <div key={coin.item.coin_id}> {coin.item.name}: {Number(coin.item.price_btc).toFixed(8)} BTC </div>
                ))}
            </div>
        </main>
        </div>
    )
 }

interface Coin {
    item: {
        coin_id: number
        name: string
        price_btc: string
    }
}

export const getStaticProps = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
    const data = await res.json()

    return{ 
        props: {coins: data.coins}
    }
}