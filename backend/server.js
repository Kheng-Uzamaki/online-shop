import path from "path";
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
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();
// body Paser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser()); // middleware for parsing cookies from requests

connectDB(); // connect to database

app.use(
  cors({
    origin: "https://online-shop-8goi.onrender.com/", // Adjust to match your frontend's URL
    credentials: true, // Allow credentials to be sent
  })
);
const port = process.env.PORT || 8000;

app.use("/api/products", productRoutes); // use product route

app.use("/api/users", userRoutes); // use user route

app.use("/api/orders", orderRoutes); // use order route

app.use("/api/uploads", uploadRoutes); // use upload route

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome to Kheng-Shop API");
  });
}

app.use(notFound); // middleware for handling 404 errors

app.use(errorHandler); // middleware for handling all other errors

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
