const db = require("../knex.config");

const findUserById = id => {
  return db("users")
    .where({ id })
    .first();
};

const findByUsername = username => {
  return db("users")
    .where({ username })
    .first();
};

const addUser = user => {
  return db("users")
    .insert(user)
    .then(id => findUserById(id[0]));
};

const find = () => {
  return db("users").select(["id", "username", "email"]);
};

module.exports = {
  addUser,
  findUserById,
  findByUsername,
  find
};
