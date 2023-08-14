const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

const users = require("./routes/users");

const server_app = express();
// const client_app = express();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

server_app.use(cors(corsOpts));

server_app.use(bodyParser.urlencoded({ extended: false }));
server_app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.log(err));

server_app.use(passport.initialize());
require("./config/passport")(passport);

server_app.use("/users", users);

server_app.listen(5000, () => console.log(`Server started on 5000`));

// client_app.use(express.static(path.join(__dirname, "build")));
// client_app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// client_app.listen(80);
