
            const { urlencoded } = require("express");
            const express = require("express");
            const sqlconnection = require("../connection/sql_connect");
            const Router = express.Router();
            
            
            Router.get("/", (req, res) => {
              res.render("airline"); 
            });
            
            Router.post("/", (req, res) => {
              const airlinesname = req.body.chooseairline;
              const cid= req.body.customerid;
             
              const type = req.body.choosetype;
              const time= req.body.time;
              const date = req.body.date;
              
              console.log(airlinesname,cid,type,time,date);
               sqlconnection.query(` insert into airline(cid,airlinesname,type,time,date) values(${parseInt(cid)},'${airlinesname}','${type}',${parseInt(time)},'${date}')`)
              console.log(req.body);
              res.redirect("r");
            });
            
            module.exports = Router;