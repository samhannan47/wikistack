const morgan = require("morgan");
const express = require("express");
const pg = require("pg");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const app = express();
const routerUser = require("./routes/users");
const routerWiki = require("./routes/wiki");

app.use(morgan("dev"));

app.use("/wiki", routerWiki);
app.use("/users", routerUser);

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send(layout(" "));
});

const sync = async () => {
  await db.sync({ force: true });
  await Page.sync();
  await User.sync();

  const PORT = 3000;
  app.listen(PORT);
};

sync();

// routerUser.get('/', (req, res) => {
//   res.send(string);
// })

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send(posts);
});
