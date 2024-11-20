import asynHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create new order object
// @route POST /api/orders
// @access Private
const addOrderItems = asynHandler(async (req, res) => {
  res.send("addOrderItems");
});

// @desc get logged in user order
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asynHandler(async (req, res) => {
  res.send("getMyOrders");
});

// @desc get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asynHandler(async (req, res) => {
  res.send("getOrderById");
});

// @desc update order to paid
// @route GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asynHandler(async (req, res) => {
  res.send("update order to paid");
});

// @desc update order to delivered
// @route GET /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asynHandler(async (req, res) => {
  res.send("update order to Delivered");
});

// @desc get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asynHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
