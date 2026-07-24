const express = require("express");
const router = express.Router();

router.get("/greeting", (req, res) => {
  res.status(200).json("Hello Frontend Developer");
});

module.exports = router;
