import { AggregatedData } from "@/entities/AggregatedData";
import { AggregatedDataRepository } from "@/repositories/AggregatedDataRepository";

export class GetHistoricalDataUseCase {
  constructor(
    private readonly aggregatedDataRepository: AggregatedDataRepository
  ) {}

  async execute(limit: number = 10): Promise<AggregatedData[]> {
    return this.aggregatedDataRepository.findRecent(limit);
  }
}
