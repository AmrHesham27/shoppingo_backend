const userModel = require("../../models/user.model");
const orderModel = require("../../models/order.model");

class User {
  static addUser = async (req, res) => {
    try {
      let user = new userModel({
        email: req.body.email,
        password: req.body.password,
        confirmedPassword: req.body.confirmedPassword,
      });
      await user.save();
      res.status(201).send({
        apiStatus: true,
        data: user,
        message: "user was added successfully",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error adding user data",
      });
    }
  };

  static editUser = async (req, res) => {
    try {
      let user = req.user;
      let editables = ["name", "phone", "gender", "birthDate", "location"];
      editables.forEach((i) => {
        if (req.body[i]) user[i] = req.body[i];
      });
      await user.save();
      res
        .status(200)
        .send({ apiStatus: true, data: user, message: "user was edited" });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "could not edit user",
      });
    }
  };

  static login = async (req, res) => {
    try {
      let user = await userModel.loginUser(req.body.email, req.body.password);
      let token = await user.generateToken();
      res
        .status(200)
        .send({ apiStatus: true, data: { user, token }, message: "logged in" });
    } catch (e) {
      res
        .status(500)
        .send({ apiStatus: false, data: e.message, message: "invalid data" });
    }
  };
  static logout = async (req, res) => {
    try {
      let user = req.user;
      let token = req.token;
      user.tokens.filter((t) => t != token);
      await user.save();
      res
        .status(200)
        .send({ apiStatus: true, message: "logged out successfully" });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "could not log out",
      });
    }
  };

  static me = async (req, res) => {
    res.status(200).send({
      apiStatus: true,
      data: req.user,
      message: "user data was fetched",
    });
  };

  static addOrder = async (req, res) => {
    try {
      let user = req.user;
      let order = new orderModel({
        userId: user._id,
        products: req.body.products,
        totalAmount: req.body.totalAmount,
      });
      await order.save();
      res.status(200).send({
        apiStatus: true,
        data: order,
        message: "order was added successfully",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "could not add order",
      });
    }
  };

  static cancelOrder = async (req, res) => {
    try {
      let user = req.user;
      let order = await orderModel.findById(req.body.orderId);
      if (order.userId !== user._id)
        throw new Error("this order does not exist");
      order.status = "canceled";
      await order.save();
      res.status(200).send({
        apiStatus: true,
        message: "order was canceled",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "could not cancel order",
      });
    }
  };

  static getUserOrders = async (req, res) => {
    try {
      let user = req.user;
      let currentPage = 1;
      if (req.params.page) currentPage = req.params.page;
      let skip = (currentPage - 1) * 5;
      let itemsCount = orderModel.count({ userId: user._id });
      let pagesNumber = Math.ceil(itemsCount / 5);

      const orders = await orderModel.find(
        { userId: user._id },
        { skip, limit: 5 }
      );
      const data = {
        data: orders,
        itemsCount,
        pagesNumber,
        itemsPerPage: 5,
        currentPage,
      };
      res.status(200).send({
        apiStatus: true,
        data: data,
        message: "orders were fetched",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "could not fetch orders",
      });
    }
  };
}
module.exports = User;
