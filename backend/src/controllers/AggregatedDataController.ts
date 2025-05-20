import { Request, Response } from "express";
import { GetAggregatedDataUseCase } from "@/usecases/GetAggregatedDataUseCase";
import { GetHistoricalDataUseCase } from "@/usecases/GetHistoricalDataUseCase";

export class AggregatedDataController {
  constructor(
    private readonly getAggregatedDataUseCase: GetAggregatedDataUseCase,
    private readonly getHistoricalDataUseCase: GetHistoricalDataUseCase
  ) {}

  async getAggregatedData(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.getAggregatedDataUseCase.execute();
      res.json(result);
    } catch (error) {
      console.error("Error getting aggregated data:", error);
    }
  }

  async getHistoricalData(req: Request, res: Response): Promise<void> {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await this.getHistoricalDataUseCase.execute(limit);
      res.json(data);
    } catch (error) {
      console.error("Error in getHistoricalData controller:", error);
    }
  }
}
