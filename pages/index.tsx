import Head from 'next/head'
import Asset from '../components/Asset'
import { AssetProps } from '../types/Asset'


export default function Home({cryptoAssets}: AssetProps){

    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <div>
                {cryptoAssets.map((asset) => (
                    <Asset key={asset.coingecko_id} 
                        coingecko_id={asset.coingecko_id} 
                        coingecko_symbol={asset.coingecko_symbol}
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

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/portfolio`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      cryptoAssets: data.data.cryptoAssets,
      stocksAssets: data.data.stocksAssets
    } // will be passed to the page component as props
  }
}

