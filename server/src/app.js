require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const knex = require("./knex");

const app = express();

//MIDLEWARE
app.use(
  cors({
    origin: process.env.FE_PATH, //add to RENDER as ENV  VARIABLE
    credentials: true,
  })
);
app.use(express.json());

//MVC CONTROLERS
const netflixController = require("./netflix/netflixController");
const dbController = require("./database/dbController");

//ENDPOINTS
app.get("/test", async (req, res) => {
  // res.status(200).send("server running, test recieved!");

  const latestEntryId = await knex("history").max("id");
  const latestEntry = await knex
    .select("*")
    .where("id", latestEntryId[0].max)
    .from("history");

  const genre = latestEntry[0].genre;
  const subGenre = latestEntry[0].sub_genre;

  const genreIdArr = await knex
    .select("related_ids")
    .where("genre", "Drama")
    .from("quiz_genre_id");

  res.status(200).send(genreIdArr);
});

app.get("/genres", netflixController.getGenres);
app.get("/result", netflixController.getResult);
app.get("/genreid/:genre", dbController.getGenreId);
app.post("/result", dbController.postResult);
app.get("/history", dbController.getHistory);

module.exports = app;
