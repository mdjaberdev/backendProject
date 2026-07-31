const User = require("../models/userSchema");
const logoutController = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json("Email is Required");
    }

    const loggedUser = await User.findOne({ email: email });
    if (!loggedUser.isLogin) {
      return res.status(400).json("User is already log out");
    }
    await User.findOneAndUpdate({ email: email }, { isLogin: false });

    res.status(200).json("Log out Successful");
  } catch (error) {
    return res.status(500).json("Intanal server error" + error);
  }
};

module.exports = logoutController;
