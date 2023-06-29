const express = require("express");
const path = require("path");
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function (_req, res) {
    // res.render("index.ejs");
    res.sendFile(path.join(__dirname, "pages", "index.html"));
});
app.get("/workshop", function (_req, res) {
    // res.render("workshop.ejs");
    res.sendFile(path.join(__dirname, "pages", "workshop.html"));

});
app.get("/art-exhibition", function (_req, res) {
    // res.render("art-exhibition.ejs");
    res.sendFile(path.join(__dirname, "pages", "art-exhibition.html"));

});
app.get("/cultural-program", function (_req, res) {
    // res.render("cultural-program.ejs");
    res.sendFile(path.join(__dirname, "pages", "cultural-program.html"));

});
app.get("/other-event", function (_req, res) {
    // res.render("other-event.ejs");
    res.sendFile(path.join(__dirname, "pages", "other-event.html"));

});
app.get("/news-tv-cover", function (_req, res) {
    // res.render("news-tv-cover.ejs");
    res.sendFile(path.join(__dirname, "pages", "news-tv-cover.html"));

});
app.get("/news-paper-cover", function (_req, res) {
    // res.render("news-paper-cover.ejs");
    res.sendFile(path.join(__dirname, "pages", "news-paper-cover.html"));

});

module.exports = app;
