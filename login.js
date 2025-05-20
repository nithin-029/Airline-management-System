const { urlencoded } = require("express");
const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();


Router.get("/", (req, res) => {
  res.render("login");
});

Router.post("/", (req, res) => {
  const name = req.body.name;
 
  const password = req.body.pass;
  
  console.log(name,password);
   sqlconnection.query(` insert into login values('${name}','${password}')`)
  console.log(req.body);
  res.redirect("/");
});

module.exports = Router;