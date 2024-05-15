/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("history", function (table) {
    table.increments("id").primary();
    table.string("country"),
      table.string("type"),
      table.string("audio"),
      table.string("subtitle"),
      table.string("genre"),
      table.string("sub_genre"),
      table.string("decade"),
      table.dateTime("date_searched");
    table.string("searched_by");
    table.foreign("searched_by").references("username").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("history");
};
