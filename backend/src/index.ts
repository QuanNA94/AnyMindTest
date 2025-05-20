import "module-alias/register";
import "reflect-metadata";

import routes from "@/routes";
import { PostgresDataSource } from "@config/data-source";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Initial connect database
PostgresDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");

  app.use("/", routes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
