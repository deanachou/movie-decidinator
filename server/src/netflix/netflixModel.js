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

  getGenreId(searchGenre) {
    return knex.select("related_ids").where("genre", searchGenre).from("quiz_genre_id");
  },

  async getResult() {
    let quizParams = {
      country,
      type,
      audio,
      subtitle,
      genre,
      sub_genre,
      decade,
      //genrelist, start_year, end_year
    };
    const url = `https://unogsng.p.rapidapi.com/search?countrylist=${quizParams.country}&type=${quizParams.type}&audio=${quizParams.audio}&subtitle=${quizParams.subtitle}&genrelist=${quizParams.genrelist}&start_year=${quizParams.start_year}&end_year=${quizParams.end_year}&audiosubtitle_andor=and&orderby=rating&limit=3&offset=0`;
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
