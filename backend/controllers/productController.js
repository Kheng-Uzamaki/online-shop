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

// @desc Create a product
// @route POST /api/products
// @access Privste/admin
const createProduct = asynHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user.id,
    image: "/images/sample.jpg",
    description: "Sample description",
    category: "Sample category",
    brand: "Sample brand",
    countInStock: 0,
    numReviews: 0,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export { getProducts, getProductById, createProduct };
