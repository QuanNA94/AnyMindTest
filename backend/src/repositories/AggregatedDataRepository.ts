import { PostgresDataSource } from "@/config/data-source";
import { AggregatedData } from "@/entities/AggregatedData";

export class AggregatedDataRepository {
  private readonly repository =
    PostgresDataSource.getRepository(AggregatedData);

  async save(data: Partial<AggregatedData>): Promise<AggregatedData> {
    const newData = this.repository.create(data);
    return this.repository.save(newData);
  }

  async findRecent(limit: number = 10): Promise<AggregatedData[]> {
    return this.repository.find({ order: { created_at: "DESC" }, take: limit });
  }
}
