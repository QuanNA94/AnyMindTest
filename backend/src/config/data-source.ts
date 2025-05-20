import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "dbAnyMindTest",
  entities: [__dirname + "/../entities/**/*.ts"],
  synchronize: true,
});
