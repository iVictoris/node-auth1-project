exports.up = async function(knex) {
  await knex.schema.createTable("users", table => {
    table.increments("id");
    table
      .string("username")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.string("email").notNullable();
    table.unique(["email", "username"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users");
};
