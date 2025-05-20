
const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();



Router.use("/:id1/:id2",(req,res)=>{
  sqlconnection.query(`select name from customer where cid=${req.params.id1}`,(err,rows1,fields)=>{
    console.log(rows1);
    customerobject=Object.assign({},...rows1)
    sqlconnection.query(`select from_city,to_city from package where pid=${req.params.id2}`,(err,rows2,fields)=>{
      console.log(rows2);
      packageobject=Object.assign({},...rows2)
      sqlconnection.query(`select  airlinesname from airline where cid= ${req.params.id1}`,(err,rows3,feilds)=>{
        console.log(rows3)
        airlineobject=Object.assign({},...rows3)
      res.render("ticket",{customerobject:customerobject,packageobject:packageobject})
    })

  })
  

})
})

module.exports=Router
