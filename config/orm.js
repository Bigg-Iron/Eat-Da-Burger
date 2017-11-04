var connection = require('./connection.js');


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {

    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers;', function (error, results) {
            if (error) throw error;
            // console.log(results);
            cb(results);
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
          });
    },
    insertOne: function(burger, cb) {
        // burger is an object  that has the column names as the object keys and the new burger as the values
        connection.query('INSERT INTO burgers SET ?', burger, function (error, results) {
            if (error) throw error;
            // console.log(results);
            cb(results);
            // Neat!
          });

      },


    updateOne: function(burgerInfoArray, cb) {connection.query('UPDATE burgers SET burger = ?, devoured = ?, WHERE id = ?', burgerInfoArray /* ['a', 'b', userId] */ , function (error, results, fields) {
        if (error) throw error;
        cb(results);
        // ...
      });}
};

// Export the ORM object in module.exports.
module.exports = orm;


orm.selectAll( function(results) {
    console.log(results);
    
});

