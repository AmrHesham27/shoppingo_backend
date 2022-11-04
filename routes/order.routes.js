const router = require("express").Router();
const userController = require("../app/controllers/user.controller");
const auth = require("../middleware/authUser");

router.get("/ordersData/:page", auth, userController.getUserOrders);

module.exports = {
  path: "",
  router,
};
