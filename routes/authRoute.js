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
  try {
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
    res.status(201).json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error ${error}`,
    });
  }
});

_.post("/login", async (req, res) => {
  try {
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
    res.status(200).json({
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error ${error}`,
    });
  }
});

function abc(req, res, next) {
  try {
    let token = req.headers.authorization;
    jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET_ACCESS,
      function (err, decoded) {
        if (decoded.role == "student") {
          res.status(403).json("You don't access permission");
        } else {
          next();
        }
      },
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error ${error}`,
    });
  }
}

_.get("/privatedata", abc, async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "All private data",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error ${error}`,
    });
  }
});

module.exports = _;
