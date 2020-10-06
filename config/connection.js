// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sea91Mar0510!",
  database: "burgers_db"
});
};

// const util = require("util");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Sea91Mar0510!",
//     database: "burgers_db"
// });
// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId)
//     connection.query = util.promisify(connection.query);
// });



connection.connect()

//----------------------------------------------------------
// Export connection for our ORM to use.
module.exports = connection;

