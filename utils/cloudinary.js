const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "lwdbsdit",
  api_key: "725254639447141",
  api_secret: "sxKAnSWgW_pHSdhhIKxvQ3PbaUY",
});


module.exports = cloudinary;