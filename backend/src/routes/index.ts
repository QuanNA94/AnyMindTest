import { Router } from "express";
import { createAggregatedDataController } from "@/config/container";

const routes = Router();
const aggregatedDataController = createAggregatedDataController();

routes.get("/", (req, res) => {
  res.json({ message: "Welcome to AnyMind Test API" });
});

// Aggregated data route
routes.get("/aggregated-data", (req, res) => 
  aggregatedDataController.getAggregatedData(req, res)
);

// Get historical data
routes.get("/historical-data", (req, res) => 
  aggregatedDataController.getHistoricalData(req, res)
);

export default routes;