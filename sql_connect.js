const mysql = require("mysql2");
const sqlconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "aeroplane",
  multipleStatements: true,
});

sqlconnection.connect((err) => {
  if (!err) {
    console.log("Data base has been connected to the airlines server");
  } else {
    console.log("Unable to connect the database to the airlines server");
  }
});

module.exports = sqlconnection;