import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();

const app = express();
// body Paser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser()); // middleware for parsing cookies from requests

connectDB(); // connect to database

app.use(cors());
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to Kheng-Shop API");
});

app.use("/api/products", productRoutes); // use product route

app.use("/api/users", userRoutes); // use user route

app.use("/api/orders", orderRoutes); // use order route

app.use(notFound); // middleware for handling 404 errors

app.use(errorHandler); // middleware for handling all other errors

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
