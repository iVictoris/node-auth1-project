const { Router } = require("express");
const bcrypt = require("bcryptjs");
const router = Router();

const { findByUsername } = require("../data/db");

router.route("/").post(async (req, res) => {
  /* POST /api/login */
  // Use the credentials sent inside the body to authenticate the user. On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id. If login fails, respond with the correct status code and the message: 'You shall not pass!'

  const { username, password } = req.body;
  try {
    const user = await findByUsername(username);

  } catch (e) {
    res.status(500).json({
      message: "Server issue!"
    });
  }
});

module.exports.router = router;
