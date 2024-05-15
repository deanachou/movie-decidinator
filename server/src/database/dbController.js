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
    const quizResult = await dbModel.postResult(
      country,
      type,
      audio,
      subtitle,
      genre,
      sub_genre,
      decade
    );
    res.status(200).send("Your response has been recorded");
  },
};
