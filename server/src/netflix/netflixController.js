const netflixModel = require("./netflixModel");

module.exports = {
  async getGenres(req, res) {
    const allGenres = await netflixModel.getGenres();
    res.status(200).send(allGenres);
  },

  async getResult(req, res) {
    const { country, type, audio, subtitle, genre, sub_genre, decade } =
      req.body;
    const quizResult = await netflixModel.getResult(
      country,
      type,
      audio,
      subtitle,
      genre,
      sub_genre,
      decade
    );
    res.status(200).send(quizResult);
  },
};
