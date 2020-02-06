const express = require("express");
const app = express();

const { router: registerRoute } = require("./router/registerRoute");
// const { router: loginRoute } = require("./router/loginRoute");
// const { router: usersRoute } = require("./router/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/register", registerRoute);
// app.use("/api/login", loginRoute);
// app.use("/api/users", usersRoute);

module.exports.app = app;
