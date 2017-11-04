var mysql      = require('mysql');
// initialize mysql connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
  database : 'Burger_DB'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


module.exports = connection;
