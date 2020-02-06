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

module.exports = {
  addUser,
  findUserById,
  findByUsername
};
