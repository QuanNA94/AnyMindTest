export interface CryptoData {
    name: string;
    price: number;
    symbol: string;
    market_cap: number;
  }
  
  export interface NewsData {
    title: string;
    source: string;
    url: string;
  }
  
  export interface AggregatedData {
    crypto: CryptoData;
    latest_news: NewsData;
    created_at?: string;
  }