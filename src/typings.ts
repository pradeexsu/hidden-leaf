export interface BitCoinPriceResponse {
  data: BitCoinData;
  success: boolean;
}

export interface BitCoinData {
  coinPriceList: CoinPriceList[];
}

export interface CoinPriceList {
  usdRate: number;
  gbpRate: number;
  eurRate: number;
  updatedAt: string;
  cheapestCurrency: string;
  cheapestRateInUsd: number;
  expensiveCurrency: string;
  expensiveRateInUsd: number;
}
