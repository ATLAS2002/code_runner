import express from "express";
import routes from "./routes";
import { getDatabase } from "./db";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
