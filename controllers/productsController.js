
const cloudinary = require("../utils/cloudinary")


const productsController = async (req, res) => {
  const uploadResult = await cloudinary.uploader
    .upload(req.file.path)
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);
  res.status(201).json({
    message: "image upload successful",
    url: uploadResult.url,
  });
};

module.exports = productsController;
