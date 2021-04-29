const router = require("express").Router();
const viewsPage = require("../views/addPage");

module.exports = router;

router.get("/", (req, res, next) => {
  res.send();
});

router.post("/", (req, res, next) => {
  res.send();
});

router.get("/add", (req, res, next) => {
  res.send(viewsPage());
});
