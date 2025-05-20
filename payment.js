const { urlencoded } = require("express");
const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("payment");
});

Router.post("/", (req, res) => {
  const paymentid = req.body.uid;
  const cid = req.body.cid;
  const pid = req.body.id;
  const paymethod = req.body.payment;
  console.log(paymentid,cid,pid,paymethod);
   sqlconnection.query(` insert into payment values(${parseInt(paymentid)},${parseInt(cid)},${parseInt(pid)},'${paymethod}')`)
  console.log(req.body);
  res.render("confirm",{cid:req.body.cid,pid:req.body.id,paymentid:req.body.uid});
});

module.exports = Router;
