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
    let quizParams = {
      countrylist: "267",
      type: "movie",
      audio: "japanese",
      subtitle: "english",
      genrelist: "10695%2C10944%2C42023%2C65209",
      start_year: "1900",
      end_year: "2024",
    };
    const url = `https://unogsng.p.rapidapi.com/search?countrylist=${quizParams.countrylist}&type=${quizParams.type}&audio=${quizParams.audio}&subtitle=${quizParams.subtitle}&genrelist=${quizParams.genrelist}&start_year=${quizParams.start_year}&end_year=${quizParams.end_year}&audiosubtitle_andor=and&orderby=rating&limit=3&offset=0`;
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
};
