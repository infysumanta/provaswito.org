const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function (_req, res) {
  res.render("index");
});
app.get("/workshop", function (_req, res) {
  res.render("workshop");
});
app.get("/art-exhibition", function (_req, res) {
  res.render("art-exhibition");
});
app.get("/cultural-program", function (_req, res) {
  res.render("cultural-program");
});
app.get("/other-event", function (_req, res) {
  res.render("other-event");
});
app.get("/news-tv-cover", function (_req, res) {
  res.render("news-tv-cover");
});
app.get("/news-paper-cover", function (_req, res) {
  res.render("news-paper-cover");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
