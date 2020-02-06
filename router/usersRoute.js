const { Router } = require("express");
const router = Router();

router.route("/").get(async (req, res) => {
  /* GET /api/users */
});

module.exports.router = router;
