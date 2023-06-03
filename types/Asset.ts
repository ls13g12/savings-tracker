export interface AssetType {
  _id: string,
  name: string,
  description: string,
  dateUpdated: string,
  value: number,
}

export interface AssetProps {
  Assets: AssetType[];
}

export interface SingleAssetProps {
  foundAsset: AssetType;
}

export interface AssetHistoryEntryType {
  _id: string,
  assetId: string
  name: string,
  dateAdded: string,
  value: number,
}

export interface AssetHistoryProps {
  foundAssets: AssetHistoryEntryType[];
}

export interface SingleAssetHistoryEntryProps {
  foundAsset: AssetHistoryEntryType;
}

