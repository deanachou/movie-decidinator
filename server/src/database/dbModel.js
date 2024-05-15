const knex = require("../knex");
const netflixApiKey = process.env.NETFLIX_APIKEY;
const netflixApiHost = process.env.NETFLIX_APIHOST;

module.exports = {
  getGenreId(searchGenre) {
    return knex
      .select("related_ids")
      .where("genre", searchGenre)
      .from("quiz_genre_id");
  },

  postResult(country, type, audio, subtitle, genre, sub_genre, decade) {
    return knex
      .insert({
        country: country,
        type: type,
        audio: audio,
        subtitle: subtitle,
        genre: genre,
        sub_genre: sub_genre,
        decade: decade,
        date_searched: new Date(),
        //searched_by: username
      })
      .into("history");
  },

  getHistory() {
    return knex.select("*").from("history");
  },
};
