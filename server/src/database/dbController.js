const dbModel = require("./dbModel");

module.exports = {
  async getGenreId(req, res) {
    const searchGenre = req.params.genre;
    const genreIdArr = await dbModel.getGenreId(searchGenre);
    res.status(200).send(genreIdArr);
  },

  async postResult(req, res) {
    const { country, type, audio, subtitle, genre, sub_genre, decade } =
      req.body;
    const postQuizResult = await dbModel.postResult(
      country,
      type,
      audio,
      subtitle,
      genre,
      sub_genre,
      decade
    );
    res.status(200).send(postQuizResult);
  },

  async getHistory(req, res) {
    const historyArr = await dbModel.getHistory();
    res.status(200).send(historyArr);
  },
};
