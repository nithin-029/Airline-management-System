const { urlencoded } = require("express");
const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();



Router.get("/", (req, res) => {
  res.render("extra");
});

Router.post("/", (req, res) => {
  
});

module.exports = Router;