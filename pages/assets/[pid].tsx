import { useRouter } from 'next/router'
import { SingleAssetProps } from '../../types/Asset'

export default function AssetPage({foundAsset}: SingleAssetProps){
  const router = useRouter()
  const handleDelete = async () => {
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
  
  return (
    <div>
      Asset: {foundAsset._id}
      Name: {foundAsset.name}
      Value: {foundAsset.value}
      <button onClick={handleDelete}>Delete</button>
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
