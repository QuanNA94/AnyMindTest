import "module-alias/register";
import "reflect-metadata";

import routes from "@/routes";
import { PostgresDataSource } from "@config/data-source";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = process.env.PORT || 8080;
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute
  message: {
    error: "Too many requests, please try again later.",
  },
  headers: true, // Include rate limit info in response headers
});

// Middleware
app.use(cors());
app.use(express.json());

// Apply the limiter to all requests
app.use(limiter);

// Initial connect database
PostgresDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");

  app.use("/", routes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
