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
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  },
};
