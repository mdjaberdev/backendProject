
const jwt = require("jsonwebtoken");
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

module.exports = abc