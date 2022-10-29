const router = require("express").Router();
const productController = require("../app/controllers/product.controller");

router.get("/products", productController.getProducts);

module.exports = {
  path: "",
  router,
};
