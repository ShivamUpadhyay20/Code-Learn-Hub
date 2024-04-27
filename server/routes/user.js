// Import the required modules
const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth"); // Assuming these functions are properly defined and exported from "Auth.js"
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/resetPassword"); // Assuming these functions are properly defined and exported from "resetPassword.js"

// Import the auth middleware
const { auth } = require("../middleware/auth"); // Assuming the auth middleware is properly defined and exported from "auth.js"

// Route for user signup
router.post("/signup", signup);

// Route for user login
router.post("/login", login);

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp); // Add auth middleware here

// Route for Changing the password
router.post("/changepassword", auth, changePassword);

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

// Export the router for use in the main application
module.exports = router;
