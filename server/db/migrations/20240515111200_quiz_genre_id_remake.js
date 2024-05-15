/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("quiz_genre_id", function (table) {
    table.increments("table_id").primary();
    table.string("genre");
    table.specificType("related_ids", "integer ARRAY");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
