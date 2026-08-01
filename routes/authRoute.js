const express = require("express");
const multer = require("multer");
const otpController = require("../controllers/otpController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const productsController = require("../controllers/productsController");
const deleteProductsController = require("../controllers/deleteProductsController");
const _ = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = "img" + "-" + Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

_.post("/sendotp", otpController);
_.post("/login/:email", loginController);
_.post("/logout/:email", logoutController);
_.post("/products", upload.single("image"), productsController);
_.delete("/deleteProducts/:id", deleteProductsController);

module.exports = _;
