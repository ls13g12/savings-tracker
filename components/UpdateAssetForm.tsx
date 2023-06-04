interface addAssetFormProps {
  _id: string
  name: string
  refreshData: () => void
}

export default function updateAsset({_id, name, refreshData = () => {}}: addAssetFormProps) {
    const handleUpdateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const dateUpdated = new Date((event.target as HTMLFormElement).dateUpdated.value)
        const data = {
          name: name,
          value: (event.target as HTMLFormElement).assetValue.value,
          dateUpdated: dateUpdated.toISOString(),
          description: (event.target as HTMLFormElement).assetDescription.value,
        }

        const JSONdata = JSON.stringify(data)
        const endpoint = `/api/portfolio/assets/${_id}`
        const options = {
          method: 'PUT',
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
      <form onSubmit={handleUpdateSubmit}>
        <ul>
          <li>
            <label htmlFor="assetValue">Value</label>
            <input type="number" id="assetValue" name="assetValue" required />
          </li>
          <li>
            <label htmlFor="dateUpdated">Value</label>
            <input type="date" id="dateUpdated" name="dateUpdated" required />
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
