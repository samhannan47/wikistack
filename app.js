const morgan = require("morgan");
const express = require("express");
const pg = require("pg");
const layout = require("./views/layout");
const { db } = require("./models");
const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send(layout(" "));
});

const PORT = 3000;

app.listen(PORT);

db.authenticate().then(() => {
  console.log("connected to the database");
});
