import asynHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asynHandler(async (req, res) => {
  res.send("authenticated");
});

// @desc Register user
// @route POST /api/users/
// @access Public
const registerUser = asynHandler(async (req, res) => {
  res.send("register User");
});

// @desc Logout user / clear cookies
// @route POST /api/users/logout
// @access Private
const logoutUser = asynHandler(async (req, res) => {
  res.send("Logout User");
});

// @desc get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asynHandler(async (req, res) => {
  res.send("get User's Profile");
});

// @desc update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asynHandler(async (req, res) => {
  res.send("Update User's Profile");
});

// @desc get all user profile
// @route GET /api/users
// @access Private/Admin
const getUsers = asynHandler(async (req, res) => {
  res.send("get Users");
});

// @desc get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asynHandler(async (req, res) => {
  res.send("get Users by id");
});

// @desc delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asynHandler(async (req, res) => {
  res.send("delete Users");
});

// @desc update user
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asynHandler(async (req, res) => {
  res.send("update Users");
});

export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
}
