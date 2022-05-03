import Head from 'next/head'

export default function Home({ coins }){
    console.log(coins)
    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <h1>Hello World</h1>
            <div>
                {coins.map((coin) => (
                <div key={coin.item.coin_id}> {coin.item.name}: {coin.item.price_btc} BTC </div>
                ))}
            </div>
        </main>
        </div>
    )
 }


export const getStaticProps = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
    const data = await res.json()

    return {
        props: {
            coins: data.coins,
        },
    }
}
