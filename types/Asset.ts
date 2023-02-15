
export interface ValueHistoryEntry {
  value: Number,
  date: Date
}

export interface Asset {
  name: string
  description: string
  dateUpdated: string,
  value: number,
  valueHistory: ValueHistoryEntry[]
}

export interface AssetProps {
  Assets: Asset[];
}

