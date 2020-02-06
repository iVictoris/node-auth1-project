const { Router } = require("express");
const router = Router();

const { find } = require("../data/db");

router.route("/").get(async (req, res) => {
  /* GET /api/users */

  // if logged in -- will create functionality
  try {
    const users = await find();
    res.status(200).json({ data: users });
  } catch (e) {
    res.status(500).json({
      message: "Unexpected response"
    });
  }
});

module.exports.router = router;
