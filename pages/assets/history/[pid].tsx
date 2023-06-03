import { useRouter } from 'next/router'
import { SingleAssetProps } from 'types/Asset'

export default function AssetPage({foundAsset}: SingleAssetProps){
  const router = useRouter()
  const refreshData = () => {
    router.replace(router.asPath);
  }

  
  
  return (
      <div>
        History
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
