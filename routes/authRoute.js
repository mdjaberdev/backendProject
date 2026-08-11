const express = require("express");
// const otpController = require("../controllers/otpController");
// const loginController = require("../controllers/loginController");
// const logoutController = require("../controllers/logoutController");
// const productsController = require("../controllers/productsController");
// const deleteProductsController = require("../controllers/deleteProductsController");
const User = require("../models/userSchema");
const _ = express.Router();
const upload = require("../utils/storage");
const permission = require("../utils/permission");
const jwt = require("jsonwebtoken");

// _.post("/sendotp", otpController);
// _.post("/login/:email", loginController);
// _.post("/logout/:email", logoutController);
// _.post("/products", upload.single("image"), productsController);
// _.delete("/deleteProducts/:id", deleteProductsController);

_.post("/registration", async (req, res) => {
  let { userName, email, password, role } = req.body;

  if (!role) {
    role = "student";
  }
  let per;

  permission.map((item) => {
    if (item.role == role) {
      per = item.permission;
    }
  });
  const user = await new User({
    userName: userName,
    email: email,
    password: password,
    role: role,
    permission: per,
  }).save();
  res.send({
    data: user,
  });
});

_.post("/login", async (req, res) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ email: email });
  console.log(existingUser);
  const token = jwt.sign(
    {
      _id: existingUser._id,
      userName: existingUser.userName,
      email: existingUser.email,
      role: existingUser.role,
      permission: existingUser.permission,
    },
    process.env.JWT_SECRET_ACCESS,
    { expiresIn: "1h" },
  );
  res.json({
    accessToken: token,
  });
});

module.exports = _;
