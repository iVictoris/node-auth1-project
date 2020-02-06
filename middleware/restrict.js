const bcrypt = require("bcryptjs");
const { findByUsername } = require("../data/db");

const restrict = async ({ body: { username, password } }, res, next) => {
  if (!username || !password) {
    return res.status(400).json({
      message: "Invalid credentials supplied or missing"
    });
  }

  try {
    const user = await findByUsername(username);
    if (bcrypt.compareSync(password, user.password)) {
      next();
      return;
    }
    res.status(401).json({
      message: "Invalid credentials, wrong username or password."
    });
  } catch (e) {
    res.status(500).json({
      message: "Issue in searching for user, please try again later."
    });
  }
};

module.exports.restrict = restrict;
