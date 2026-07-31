const express = require("express");
const otpController = require("../controllers/otpController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const _ = express.Router();

_.post("/sendotp", otpController);
_.post("/login/:email", loginController);
_.post("/logout/:email", logoutController);

module.exports = _;
