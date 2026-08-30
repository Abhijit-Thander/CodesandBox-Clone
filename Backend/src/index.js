import express from "express";
import dotenv from "dotenv";
dotenv.config();

let app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("<h1>Hello From Server <h1/>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port${PORT}`);
});
