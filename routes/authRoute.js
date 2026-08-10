const express = require("express");
const otpController = require("../controllers/otpController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const productsController = require("../controllers/productsController");
const deleteProductsController = require("../controllers/deleteProductsController");
const User = require("../models/userSchema");
const _ = express.Router();
const upload = require("../utils/storage");

const permission = require("../permission");

_.post("/sendotp", otpController);
_.post("/login/:email", loginController);
_.post("/logout/:email", logoutController);
_.post("/products", upload.single("image"), productsController);
_.delete("/deleteProducts/:id", deleteProductsController);

_.post("/registration", async (req, res) => {
  let { userName, email, password, role } = req.body;
  if (!role) {
    role = "student";
  }
  let per = [];
  permission.map((item) => {
    if (item.role == role) {
      console.log(item.permission);
    }
  });

  //   let user = await new User({
  //     userName: "jaber",
  //     email: "mdjaber.dev@gmail.com",
  //     role: "student",
  //     permission: "",
  //   }).save();
  //   res.send({
  //     data: user,
  //   });
});

module.exports = _;
