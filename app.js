const express = require("express");
const path = require("path");
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function (_req, res) {
    res.render("index.ejs");
});
app.get("/workshop", function (_req, res) {
    res.render("workshop.ejs");
});
app.get("/art-exhibition", function (_req, res) {
    res.render("art-exhibition.ejs");
});
app.get("/cultural-program", function (_req, res) {
    res.render("cultural-program.ejs");
});
app.get("/other-event", function (_req, res) {
    res.render("other-event.ejs");
});
app.get("/news-tv-cover", function (_req, res) {
    res.render("news-tv-cover.ejs");
});
app.get("/news-paper-cover", function (_req, res) {
    res.render("news-paper-cover.ejs");
});

module.exports = app;
