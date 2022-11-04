const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    products: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "recieved", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
