if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import * as express from "express";
import router from "./routes/routes";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(router);

export default app;
