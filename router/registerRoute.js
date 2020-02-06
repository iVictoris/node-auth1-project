const { Router } = require("express");
const bcrypt = require("bcryptjs");
const router = Router();

const { addUser } = require("../data/db");

router.route("/").post(async (req, res) => {
  /* POST /api/register */
  const { username, password, email } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = { username, password: hash, email };
  const dbUser = await addUser(user);
  res.json(user);
});

module.exports.router = router;
