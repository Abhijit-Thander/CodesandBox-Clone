import express from "express";
import { SERVER_CONFIG } from "./config/ServerConfig.js";
import cors from "cors";
import apiRouter from "./routes/index.js";

let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/api", apiRouter);

app.listen(SERVER_CONFIG.PORT, () => {
  console.log(`Server is listening on Port ${SERVER_CONFIG.PORT}`);
});
