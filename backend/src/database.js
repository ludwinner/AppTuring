import { config } from "./config";
const mysql = require ("mysql2");

export const connect = async () => {
  return await mysql.createConnection(config);
};

 