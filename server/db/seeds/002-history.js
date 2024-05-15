/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("history").del();
  await knex("history").truncate();
  await knex("history").insert([
    {
      country: "Japan",
      type: "Movie",
      audio: "Japanese",
      subtitle: "English",
      genre: "Animated",
      sub_genre: "Teens",
      decade: "ALL!",
      date_searched: new Date(),
    },
  ]);
};
