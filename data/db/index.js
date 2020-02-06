const db = require("../knex.config");

const addUser = user => {
  return db("users").insert(user);
};

module.exports = {
  addUser
};
