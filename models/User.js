const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Boolean, default: true },
});

const User = mongoose.model("users", UserSchema);

module.exports = {
  signup: (data) =>
    User.findOne({ email: data.email }).then(
      (user) =>
        new Promise((resolve, reject) => {
          if (user) return reject({ type: 400, msg: "Email already exists" });
          const newUser = new User(data);
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err)
                return reject({
                  type: 500,
                  msg: "Password crypt failed",
                });
              newUser.password = hash;
              newUser
                .save()
                .then(() => resolve())
                .catch(() =>
                  reject({
                    type: 500,
                    msg: "Create user failed",
                  })
                );
            });
          });
        })
    ),
  signin: (data) =>
    User.findOne({ email: data.email }).then(
      (user) =>
        new Promise((resolve, reject) => {
          if (!user) return reject({ type: 404, msg: "user not found" });
          bcrypt.compare(data.password, user.password).then((isMatch) => {
            if (isMatch) {
              const payload = {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                role: user.role,
              };
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err)
                    return reject({
                      type: 500,
                      msg: "Signing token failed",
                    });
                  return resolve({
                    token: "Bearer " + token,
                  });
                }
              );
            } else return reject({ type: 400, msg: "Wrong password" });
          });
        })
    ),
};
