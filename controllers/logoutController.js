const User = require("../models/userSchema");
const logoutController = async (req, res) => {
  const { email } = req.params;
  if (!email) {
    return res.status(400).json("Email is Required");
  }

  const loggedUser = await User.findOne({ email: email });
  if (!loggedUser.isLogin) {
    return res.status(400).json("User is already log out");
  }
  await User.findOneAndUpdate({ email: email }, { isLogin: true });

  res.status(200).json("Log out Successful");
};

module.exports = logoutController;
