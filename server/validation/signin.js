const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = (req, res, next) => {
  const data = req.body;
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!isEmpty(errors)) res.status(400).json(errors);
  else next();
};
