const morgan = require("morgan");
const express = require("express");
const pg = require("pg");

const app = express();

app.use(morgan("dev"));

app.use(express.static);
