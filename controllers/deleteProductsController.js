const cloudinary = require("../utils/cloudinary");

const deleteProductsController = async (req, res) => {
  const { id } = req.params;
  const deleteResult = await cloudinary.uploader.destroy(id).catch((error) => {
    console.log(error);
  });

  res.send(deleteResult);
};

module.exports = deleteProductsController;
