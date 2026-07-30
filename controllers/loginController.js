const User = require("../models/userSchema");

const loginController = async (req, res) => {
  const { email } = req.params;
  const { otp } = req.body;
  const existingUser = await User.findOne({ email: email });

  if (!existingUser.isLogin) {
    res.send("Age logout koro");
  }
  if (!existingUser.otp) {
    res.send("Besi Calak");
  }
  if (existingUser.otp == otp) {
    await User.findOneAndUpdate({ email: email }, { otp: "", isLogin: false });
    return res.send("Login");
  } else {
    return res.send("OTP not match");
  }
};

module.exports = loginController;
