import { useRouter } from 'next/router'
import Head from 'next/head'
import AssetCard from '../components/AssetCard'
import AddAssetForm from '../components/AddAssetForm'
import { AssetProps } from '../types/Asset'

export default function Home({Assets}: AssetProps){
    const router = useRouter()
    // Call this function whenever you want to
    // refresh props!
    const refreshData = () => {
      router.replace(router.asPath);
    }

    return (
        <div>
        <Head>
            <title>Tracker</title>
        </Head>

        <main>
            <div>
                {Assets.map((asset) => (
                    <div>
                      <AssetCard key={asset._id} 
                          _id={asset._id}
                          name={asset.name} 
                          description={asset.description}
                          value={asset.value}
                          dateUpdated={asset.dateUpdated?.toString()}               
                        />
                    </div>                     
                ))}
            </div>
            <div>
              <AddAssetForm
                refreshData={refreshData}
              />
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

