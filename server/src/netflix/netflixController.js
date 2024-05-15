const netflixModel = require("./netflixModel");

module.exports = {
  async getGenres(req, res) {
    const allGenres = await netflixModel.getGenres();
    res.status(200).send(allGenres);
  },

  async getResult(req, res) {
    const quizResult = await netflixModel.getResult();
    res.status(200).send(quizResult);
  },
};
