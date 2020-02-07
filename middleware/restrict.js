const bcrypt = require("bcryptjs");
const { findByUsername } = require("../data/db");

const restrict = async (req, res, next) => {
  console.log(req.session);
  if (!req.session || !req.session.user) {
    return res.status(404).json({
      message: "You shall not pass."
    });
  }
  next();
};

module.exports.restrict = restrict;
