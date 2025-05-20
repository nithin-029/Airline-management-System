const { urlencoded } = require("express");
const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();



Router.get("/", (req, res) => {
  res.render("home");
});

Router.post("/", (req, res) => {
  const name = req.body.name;
 
  const city = req.body.city;
  const mobilenumber = req.body.phone;
  const email = req.body.email;
  const dob = req.body.bdate;
  const passenger = req.body.quantity;
  const gender = req.body.gender;
  console.log(req.body);
   sqlconnection.query(`insert into customer(name,city,mobileno,email,dob,passenger,gender) values('${name}','${city}',${parseInt(mobilenumber)},'${email}','${dob}',${parseInt(passenger)},'${gender}')`)
  
  sqlconnection.query(
    `select cid from customer where mobileno='${parseInt(mobilenumber)}'`,
    (err, rows, fields) => {
      console.log(rows);
      res.render("homenxt", { data: Object.assign({}, ...rows) });
    }
  );
});

module.exports = Router;