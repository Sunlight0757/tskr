const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = (req, res, next) => {
  const data = req.body;
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "First Name field is required";
  }

  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "Last Name field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (
    !validator.isStrongPassword(data.password, {
      minLength: 0,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    errors.password = "Password must have at least 1 numeric character";
  }

  if (
    !validator.isStrongPassword(data.password, {
      minLength: 0,
      minLowercase: 0,
      minUppercase: 1,
      minNumbers: 0,
      minSymbols: 0,
    })
  ) {
    errors.password = "Password must have at least 1 upper case character";
  }

  if (
    !validator.isStrongPassword(data.password, {
      minLength: 0,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    })
  ) {
    errors.password = "Password must have at least 1 lower case character";
  }

  if (
    !validator.isStrongPassword(data.password, {
      minLength: 8,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    })
  ) {
    errors.password = "Password length must be greater than 8 characters";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!isEmpty(errors)) res.status(400).json(errors);
  else next();
};
