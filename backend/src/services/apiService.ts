import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export interface CryptoData {
  name: string;
  symbol: string;
  price: number;
  market_cap: number;
}

export interface NewsData {
  title: string;
  source: string;
  url: string;
}

const COINGECKO_API_BASE_URL =
  process.env.COINGECKO_API_BASE_URL || "https://api.coingecko.com/api/v3";
const NEWS_API_BASE_URL =
  process.env.NEWS_API_BASE_URL || "https://newsapi.org/v2";
const PLACEHOLDER_API_BASE_URL =
  process.env.PLACEHOLDER_API_BASE_URL ||
  "https://jsonplaceholder.typicode.com";

export const fetchCryptoData = async (): Promise<CryptoData | null> => {
  try {
    const response = await axios.get(
      `${COINGECKO_API_BASE_URL}/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`
    );

    return {
      name: response.data.name,
      symbol: response.data.symbol.toUpperCase(),
      price: response.data.market_data.current_price.usd,
      market_cap: response.data.market_data.market_cap.usd,
    };
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return null;
  }
};

export const fetchNewsData = async (): Promise<NewsData | null> => {
  try {
    const newsApiKey = process.env.NEWS_API_KEY;

    if (!newsApiKey || newsApiKey !== "0f71b5daafdd4c5ab5bdf9d2697e8d15") {
      const response = await axios.get(`${PLACEHOLDER_API_BASE_URL}/posts/1`);
      return {
        title: response.data.title,
        source: "JSONPlaceholder",
        url: PLACEHOLDER_API_BASE_URL,
      };
    }

    const response = await axios.get(
      `${NEWS_API_BASE_URL}/top-headlines?country=us&category=business&apiKey=${newsApiKey}`
    );

    const article = response.data.articles[0];
    return {
      title: article.title,
      source: article.source.name,
      url: article.url,
    };
  } catch (error) {
    console.error("Error fetching news data:", error);
    return null;
  }
};
