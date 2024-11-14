import asynHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all products
 // @route GET /api/products
 // @access Public

const getProducts = asynHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch a product
 // @route GET /api/products/:id
 // @access Public
const getProductById = asynHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  }
  res.status(404).json({ message: "Resource not found" });
});

export { getProducts, getProductById };
