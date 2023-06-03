import { AssetHistoryEntryType, AssetHistoryProps } from 'types/Asset'
var moment = require('moment'); 

export default function AssetPage({foundAssets}: AssetHistoryProps){
  
  return (
      <div>
        History
        <ul>
          {/* refactor into li entry card*/}
          {foundAssets.map((asset: AssetHistoryEntryType) => (
            <li key={asset._id}>
              {asset.name}
              <br/>
              {asset.value}
              <br/>
              {asset.dateAdded && <div>{moment(asset.dateAdded).format('MMMM, DD yyyy')}</div>}
            </li>
          ))}  
        </ul>
    
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
