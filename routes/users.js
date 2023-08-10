const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const validateSignupInput = require("../validation/signup");
const validateSigninInput = require("../validation/signin");

router
  .route("/")
  .post(validateSignupInput, userController.signup)
  .put(validateSigninInput, userController.signin);

module.exports = router;
