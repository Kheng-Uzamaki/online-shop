import express from "express";
import products from "./data/products.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();

connectDB(); // connect to database

app.use(cors());
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to Kheng-Shop API");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
