import Head from 'next/head'
import Asset from '../components/Asset'
import AddAssetForm from '../components/AddAssetForm'
import { AssetProps } from '../types/Asset'
import { ValueHistoryEntry } from '../types/Asset'


export default function Home({Assets}: AssetProps){

    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <div>
                {Assets.map((asset) => (
                    <Asset key={asset.name} 
                        name={asset.name} 
                        description={asset.description}
                        value={asset.value}
                        dateUpdated={asset.dateUpdated?.toString()}
                        valueHistory={asset.valueHistory}                     
                      />
                ))}
            </div>
            <div>
              <AddAssetForm/>
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
      Assets: data.data.Assets || null
    } // will be passed to the page component as props
  }
}

