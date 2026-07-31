const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

const User = require("../models/userSchema");
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
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  const otp = otpGenerator.generate(6);
  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    const user = new User({
      email: email,
      otp: otp,
    });

    user.save();
  } else {
    await User.findOneAndUpdate({ email: email }, { otp: otp });
  }

  
  const info = await transporter.sendMail({
    from: '"MD JABER" mdjaber.dev@gmail.com', 
    to: email, 
    subject: "This is your OTP", 
    text: "Hello world?", 
    html: htmlTemplete(otp), 
  });

  console.log("Message sent: %s", info.messageId);
  res.send({
    success: true,
    message: "Send OTP Message"
  });
};

module.exports = otpController;
