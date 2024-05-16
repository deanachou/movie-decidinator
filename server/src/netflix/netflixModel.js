const { get } = require("../app");
const knex = require("../knex");
const netflixApiKey = process.env.NETFLIX_APIKEY;
const netflixApiHost = process.env.NETFLIX_APIHOST;

module.exports = {
  async getGenres() {
    const url = "https://unogsng.p.rapidapi.com/genres";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": netflixApiKey,
        "X-RapidAPI-Host": netflixApiHost,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  },

  async getResult() {
    const latestEntryId = await knex("history").max("id");
    const latestEntry = await knex
      .select("*")
      .where("id", latestEntryId[0].max)
      .from("history");

    const country = latestEntry[0].country;
    const genre = latestEntry[0].genre;
    const subGenre = latestEntry[0].sub_genre;

    const countryId = await knex
      .select("country_id")
      .where("country", country)
      .from("country_id");

    const genreIdArr = await knex
      .select("related_ids")
      .where("genre", genre)
      .from("quiz_genre_id");

    const subGenreIdArr = await knex
      .select("related_ids")
      .where("genre", subGenre)
      .from("quiz_genre_id");
    const genrelistArr = genreIdArr.concat(subGenreIdArr);
    const genrelistStr = genrelistArr[0].related_ids.join("%2C");

    let quizParams = {
      country: countryId[0].country_id,
      type: latestEntry[0].type,
      audio: latestEntry[0].audio,
      subtitle: latestEntry[0].subtitle,
      genrelist: genrelistStr,
    };

    const url = `https://unogsng.p.rapidapi.com/search?countrylist=${quizParams.country}&type=${quizParams.type}&audio=${quizParams.audio}&subtitle=${quizParams.subtitle}&genrelist=${quizParams.genrelist}&audiosubtitle_andor=and&orderby=rating&limit=3&offset=0`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": netflixApiKey,
        "X-RapidAPI-Host": netflixApiHost,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
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
};
