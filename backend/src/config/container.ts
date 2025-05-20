import { AggregatedDataRepository } from "@/repositories/AggregatedDataRepository";
import { GetAggregatedDataUseCase } from "@/usecases/GetAggregatedDataUseCase";
import { GetHistoricalDataUseCase } from "@/usecases/GetHistoricalDataUseCase";
import { AggregatedDataController } from "@/controllers/AggregatedDataController";

export function createAggregatedDataController(): AggregatedDataController {
    const repository = new AggregatedDataRepository();
    const getAggregatedDataUseCase = new GetAggregatedDataUseCase(repository);
    const getHistoricalDataUseCase = new GetHistoricalDataUseCase(repository);
    
    return new AggregatedDataController(
        getAggregatedDataUseCase,
        getHistoricalDataUseCase
    );
}