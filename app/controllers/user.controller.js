const userModel = require("../../models/user.model");

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
}
module.exports = User;
