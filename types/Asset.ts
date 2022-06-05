export interface CryptoAsset {
  coingecko_id: string,
  coingecko_symbol: string,
  //datePurchased: Date,
  //dateUpdated: Date,
  name: string,
  quantity: number
  buyPrice: number
}
export interface StocksAsset{
  name: string
  //datePurchased: Date
  //dateUpdated: Date
  id: string,
  buyPrice: number,
  quantity: number
}

export interface AssetProps {
  [assetType: string]: CryptoAsset[] | StocksAsset[];

  cryptoAssets: CryptoAsset[];
  stocksAssets: StocksAsset[];
}
