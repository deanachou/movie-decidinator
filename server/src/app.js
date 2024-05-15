require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");

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
app.get("/test", (req, res) => {
  res.status(200).send("server running, test recieved!");
});

app.get("/genres", netflixController.getGenres);
app.get("/result", netflixController.getResult);
app.get("/genreid/:genre", dbController.getGenreId);
app.post("/result", dbController.postResult);
app.get("/history", dbController.getHistory);

module.exports = app;
