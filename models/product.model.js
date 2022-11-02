const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 6,
      required: true,
    },
    desc1: {
      type: String,
    },
    desc2: {
      type: String,
    },
    imgId: {
      type: String,
      required: true,
    },
    imgExt: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
    // id of stripe
    priceId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
