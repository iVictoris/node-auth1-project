const express = require("express");
const app = express();
const session = require("express-session");

const { router: registerRoute } = require("./router/registerRoute");
const { router: loginRoute } = require("./router/loginRoute");
const { router: usersRoute } = require("./router/usersRoute");
const { restrict } = require("./middleware/restrict");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configure express-session middleware
app.use(
  session({
    secret: "This is the one secret you will not find out",
    resave: false,
    saveUninitialized: false // compliance with certain laws
  })
);

app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/users", restrict, usersRoute);

module.exports.app = app;
