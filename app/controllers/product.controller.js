const productModel = require("../../models/product.model");

class Product {
  static getProducts = async (req, res) => {
    try {
      const products = await productModel.find();
      res.status(200).send({
        apiStatus: true,
        data: products,
        message: "products were fetched successfully",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        message: "error",
      });
    }
  };
}
module.exports = Product;
