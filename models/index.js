const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("page", {
  title: Sequelize.STRING,
});

module.exports = {
  db,
};
