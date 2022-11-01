const router = require("express").Router();
const userController = require("../app/controllers/user.controller");
const auth = require("../middleware/authUser");

router.post("/register", userController.addUser);
router.post("/login", userController.login);
router.post("/logout", auth, userController.logout);
router.get("/me", auth, userController.me);
router.post("/editProfile", auth, userController.editUser);

module.exports = {
  path: "",
  router,
};
