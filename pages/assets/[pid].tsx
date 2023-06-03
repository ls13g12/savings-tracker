import { useRouter } from 'next/router'
import AssetCard from '../../components/AssetCard'
import { SingleAssetProps } from '../../types/Asset'
import UpdateAssetForm from '../../components/UpdateAssetForm'
var moment = require('moment'); 

export default function AssetPage({foundAsset}: SingleAssetProps){
  const router = useRouter()
  const refreshData = () => {
    router.replace(router.asPath);
  }
  const handleDeleteAsset = async () => {
    const endpoint = `/api/portfolio/assets/${foundAsset._id}`
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(endpoint, options)
    if (response.status < 300) {
      router.push('/')
    }
  }

  const handleDeleteHistoryEntry = async (value: number, date: string) => {
    const endpoint = `/api/portfolio/assets/${foundAsset._id}`
    console.log("DO I MAKE IT THIS FAR?")
    const data = {
      valueHistoryEntryDateToRemove: date,
      valueHistoryEntryValueToRemove: value,
    }
    const JSONdata = JSON.stringify(data)
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata 
    }
    const response = await fetch(endpoint, options)
    if (response.status < 300) {
      router.replace(router.asPath);
    }
  }
  
  
  return (
    <div>
      <AssetCard key={foundAsset._id} 
        _id={foundAsset._id}
        name={foundAsset.name} 
        description={foundAsset.description}
        value={foundAsset.value}
        dateUpdated={foundAsset.dateUpdated?.toString()}                 
      />
      <button onClick={handleDeleteAsset}>Delete Asset</button>

      <div>
        Update Asset Value
        <UpdateAssetForm key=""
          name={foundAsset.name}
          _id={foundAsset._id}
          refreshData={refreshData}
        />
      </div>
    </div>
  )
}

export async function getServerSideProps(context: { params: { pid: any } }) {
  const res = await fetch(`http://localhost:3000/api/portfolio/assets/${context.params.pid}`)
  const data = await res.json()

  if (!data) {
    return {
        notFound: true,
    }
  }

  return {
    props: { 
      foundAsset: data.data || null
    } // will be passed to the page component as props
  }
}
