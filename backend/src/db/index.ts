import { drizzle } from "drizzle-orm/mysql2";
import { createPool, type ConnectionOptions } from "mysql2/promise";
import { env } from "../env";

export const getDatabase = () => {
  try {
    const mysqlConfig = {
      host: env.DB_HOST,
      port: 3306,
      user: env.DB_USER,
      database: env.DB_NAME,
      password: env.DB_PASSWORD,
      connectionLimit: 10,
    } satisfies ConnectionOptions;

    const connection = createPool(mysqlConfig);
    console.log("Connected to database");

    return drizzle(connection);
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};
