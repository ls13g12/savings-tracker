import { AssetHistoryEntryType, AssetHistoryProps } from 'types/Asset'
import { useRouter } from 'next/router'
import { useState } from 'react';
import AssetHistoryList from '@/components/AssetHistoryList';

export default function AssetHistoryPage({foundAssets}: AssetHistoryProps){

  return (
    <div>
    <AssetHistoryList foundAssets={foundAssets}/>
    </div>

  )
}

export async function getServerSideProps(context: { params: { pid: any } }) {
  const res = await fetch(`http://localhost:3000/api/portfolio/assets/history`)
  const data = await res.json()
  console.log(`data.data: ${data.data}`)

  if (!data) {
    return {
        notFound: true,
    }
  }

  return {
    props: { 
      foundAssets: data.data || null
    } // will be passed to the page component as props
  }
}
