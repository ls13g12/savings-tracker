import Asset from './AssetCard'

interface addAssetFormProps {
  refreshData: () => void
}

export default function addAsset({refreshData = () => {}}: addAssetFormProps) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const currentTimeString = new Date().toUTCString()
        const data = {
          name: (event.target as HTMLFormElement).assetName.value,
          value: (event.target as HTMLFormElement).assetValue.value,
          dateUpdated: currentTimeString,
          description: (event.target as HTMLFormElement).assetDescription.value,
        }

        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/portfolio/assets'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        if (response.status < 300) {
          refreshData();
        }
    }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="assetName">Name</label>
            <input type="text" id="assetName" name="assetName" required />
          </li>
          <li>
            <label htmlFor="assetValue">Value</label>
            <input type="number" id="assetValue" name="assetValue" required />
          </li>
          <li>
            <label htmlFor="assetDescription">Description</label>
            <input type="text" id="assetDescription" name="assetDescription" />
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
