const User = require("../models/userSchema");

const loginController = async (req, res) => {
  try {
    const { email } = req.params;
    const { otp } = req.body;
    const loggedUser = await User.findOne({ email: email });

    if (!loggedUser) {
      return res.status(404).json("User not found");
    }
    if (loggedUser.isLogin) {
      return res.status(400).json("Age log out kro");
    }
    if (!loggedUser.otp) {
      return res.status(400).json("tokai hacker");
    }
    if (loggedUser.otp == otp) {
      const loggedUser = await User.findOneAndUpdate(
        { email: email },
        { otp: "", isLogin: true },
      );
      return res.status(200).json("Login Successful");
    } else {
      return res.status(400).json("OTP not match muri khao");
    }
  } catch (error) {
    return res.status(500).json("Intanal server error:" + error);
  }
};

module.exports = loginController;
