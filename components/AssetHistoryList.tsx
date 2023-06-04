import { useRouter } from 'next/router';
import { AssetHistoryProps, AssetHistoryEntryType } from '../types/Asset'
import { useState } from 'react';
var moment = require('moment'); 

const AssetHistoryList = ({foundAssets}: AssetHistoryProps) => {
    const router = useRouter();
  
    const [sortByParameter, setSortByParameter] = useState("mostRecent");
    const [filter, setFilter] = useState("");
    const [assets, setAssets] = useState(foundAssets.sort((a,b) => (Date.parse(b.dateAdded) - Date.parse(a.dateAdded))))

    //const filtetAndSortAssets = (assets, filter, sort)
    
    const onInputChange = (e: React.ChangeEvent<any>) => {
        setFilter(e.target.value)
        setAssets(foundAssets
            .filter(asset => asset.name.toLowerCase().includes(e.target.value)))
    }

    const onSelectChange = (e: React.ChangeEvent<any>) => {
        setSortByParameter(e.target.value)
        console.log("target.value", e.target.value)
        console.log("sortByParameter", sortByParameter)
        
        switch(e.target.value){
            case "mostRecent":
                setAssets(foundAssets
                    .sort((a,b) => (Date.parse(b.dateAdded) - Date.parse(a.dateAdded)))
                    .filter(asset => asset.name.toLowerCase().includes((filter))))
                break
            case "assetName":
                setAssets(foundAssets
                    .sort((a,b) => (a.name.localeCompare(b.name, 'en')))
                    .filter(asset => asset.name.toLowerCase().includes((filter))))
                break
            case "highestValue":
                setAssets(assets
                    .sort((a,b) => (b.value - a.value))
                    .filter(asset => asset.name.toLowerCase().includes((filter))))
                break
            default:
                break
        }
    }
    
    const handleDeleteAssetHistoryEntry = async (id: string) => {
      const endpoint = `/api/portfolio/assets/history/${id}`
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await fetch(endpoint, options)
      if (response.status < 300) {
        router.replace(router.asPath);
      }
    }
  
    return(
        <div>
        History of {sortByParameter}
        <ul>
          {/* refactor into li entry card*/}
          {assets.map((assetHistoryEntry: AssetHistoryEntryType) => (
            <div>
              <li key={assetHistoryEntry._id}>
              {assetHistoryEntry.name}
              <br />
              {assetHistoryEntry.value}
              <br />
              {assetHistoryEntry.dateAdded && <div>{moment(assetHistoryEntry.dateAdded).format('MMMM, DD yyyy')}</div>}
                <button onClick={() => handleDeleteAssetHistoryEntry(assetHistoryEntry._id)}>Delete Asset</button>
              </li>
              <br />
            </div>
          ))}  
        </ul>
        <div>
          <select value={sortByParameter} onChange={onSelectChange}>
            <option value="mostRecent">Most Recent</option>
            <option value="assetName">Asset Name</option>
            <option value="highestValue">Highest Value</option>
          </select>
        </div>
        <div>
            <input name="filterList" placeholder="asset name filter" onChange={onInputChange}></input>
        </div>
      </div>
    )
}

export default AssetHistoryList;