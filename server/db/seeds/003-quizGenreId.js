/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("quiz_genre_id").del();
  await knex("quiz_genre_id").insert([
    {
      genre: "horror",
      related_ids: [
        1964, 4809, 8711, 9509, 10695, 10944, 42023, 75405, 83059, 89585,
      ],
    },
  ]);
};
