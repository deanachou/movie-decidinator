/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("quiz_genre_id").del();
  await knex("quiz_genre_id").truncate();
  await knex("quiz_genre_id").insert([
    {
      genre: "Horror",
      related_ids: [
        1964, 4809, 8711, 9509, 10695, 10944, 42023, 75405, 83059, 89585,
      ],
    },
    {
      genre: "Comedy",
      related_ids: [7539, 10375, 11559, 1003219, 81216629],
    },
    {
      genre: "Action",
      related_ids: [
        899, 2653, 4344, 9584, 10673, 10702, 11804, 43040, 43048, 46576,
      ],
    },
    {
      genre: "Non-Fiction",
      related_ids: [1159, 3652, 4006, 4720, 5349, 6839, 81329745],
    },
    {
      genre: "Animated",
      related_ids: [7992, 786708, 7424],
    },

    {
      genre: "Sci-Fi and Fantasy",
      related_ids: [1492],
    },
    {
      genre: "Drama",
      related_ids: [5763],
    },
    {
      genre: "Romance",
      related_ids: [26156, 29281, 36103, 1522234],
    },
    {
      genre: "Western",
      related_ids: [81399454, 81399656, 81399657, 81427741, 81427754, 81417795],
    },
    {
      genre: "Asian",
      related_ids: [
        81417804, 81418687, 81422106, 81422108, 81422109, 81427753, 81418683,
      ],
    },
    {
      genre: "Kids",
      related_ids: [28034, 28083, 52843, 413820, 81711249],
    },
    {
      genre: "Teens",
      related_ids: [28034, 28083, 52843, 413820, 81711249],
    },
    {
      genre: "Based on Book/Game",
      related_ids: [
        3830, 4961, 9889, 13158, 846216, 1819777, 1819776, 1819198, 2192320,
        2936382,
      ],
    },
    {
      genre: "Music",
      related_ids: [1701],
    },
    {
      genre: "Sports",
      related_ids: [180, 5286, 7243, 9327, 1622375],
    },
    {
      genre: "Crime/Thriller",
      related_ids: [5824, 6889, 8933, 9147, 81216565, 43048],
    },
  ]);
};
