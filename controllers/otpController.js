const User = require("../models/userSchema");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const htmlTemplete = require("../utils/htmlTemplete");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "mdjaber.dev@gmail.com",
    pass: "glmn bseo dprq akxf",
  },
});

const otpController = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.send("Email is Required");
    }

    const otp = otpGenerator.generate(6);
    const loggedUser = await User.findOne({ email: email });
    if (!loggedUser) {
      const user = new User({
        email: email,
        otp: otp,
      }).save();
    } else {
      await User.findOneAndUpdate({ email: email }, { otp: otp });
    }

    const info = await transporter.sendMail({
      from: '"MD JABER" mdjaber.dev@gmail.com',
      to: email,
      subject: "Hello",
      text: "Hello world?",
      html: htmlTemplete(otp),
    });
    res.send("Otp Send");
  } catch (error) {
    return res.status(500).json("Intanal server error" + error);
  }
};

module.exports = otpController;
