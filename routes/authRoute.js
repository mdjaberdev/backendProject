const express = require("express");
const otpController = require("../controllers/otpController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const productsController = require("../controllers/productsController");
const deleteProductsController = require("../controllers/deleteProductsController");
const _ = express.Router();
const upload = require("../utils/storage");

_.post("/sendotp", otpController);
_.post("/login/:email", loginController);
_.post("/logout/:email", logoutController);
_.post("/products", upload.single("image"), productsController);
_.delete("/deleteProducts/:id", deleteProductsController);

module.exports = _;
