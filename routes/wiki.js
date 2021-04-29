const router = require("express").Router();
const viewsPage = require("../views/addPage");
const layout = require("../views/layout");
const { db, Page, User } = require("../models");

module.exports = router;

router.get("/", (req, res, next) => {
  res.send(layout(`${User}`));
});

router.post("/", (req, res, next) => {
  res.send();
});

router.get("/add", (req, res, next) => {
  res.send(viewsPage());
});
