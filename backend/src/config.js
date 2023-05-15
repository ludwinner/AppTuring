import { createPool } from "mysql2/promise";
import { config as dotenv } from "dotenv";
dotenv();
export const config = createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});
