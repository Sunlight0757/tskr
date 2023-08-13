const User = require("../models/User");

module.exports = {
  signup: (req, res) => {
    User.signup(req.body)
      .then(() => {
        res.json({ status: "Success", msg: "User create successfully." });
      })
      .catch((err) => {
        res.status(err.type).json({ status: "Error", msg: err.msg });
      });
  },
  signin: (req, res) => {
    User.signin(req.body)
      .then((data) => {
        res.json({
          status: "Success",
          msg: "Login successful",
          token: data.token,
        });
      })
      .catch((err) => {
        res.status(err.type).json({ status: "Error", msg: err.msg });
      });
  },
};
