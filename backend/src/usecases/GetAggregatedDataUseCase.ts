import { AggregatedData } from "@/entities/AggregatedData";
import { AggregatedDataRepository } from "@/repositories/AggregatedDataRepository";
import { fetchCryptoData, fetchNewsData, CryptoData, NewsData } from "@/services/apiService";

export class GetAggregatedDataUseCase {
  constructor(
    private readonly aggregatedDataRepository: AggregatedDataRepository
  ) {}

  async execute(): Promise<{ crypto: CryptoData | Record<string, never>; latest_news: NewsData | Record<string, never> }> {
    // Fetch data from external APIs using the service
    const [cryptoData, newsData] = await Promise.all([
      fetchCryptoData(),
      fetchNewsData(),
    ]);

    const crypto: CryptoData | Record<string, never> = cryptoData || {};
    const latest_news: NewsData | Record<string, never> = newsData || {};

    const data: Partial<AggregatedData> = {
      crypto,
      latest_news,
    };

    await this.aggregatedDataRepository.save(data);

    return {
      crypto,
      latest_news,
    };
  }
}