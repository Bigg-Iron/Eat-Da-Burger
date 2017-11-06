var orm = require('../../config/orm.js');


var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    insert: function(cb) {
        orm.insertOne('burgers', function(res) {
            cb(res);
        });
    },

    update: function(cb) {
        orm.updateOne('burgers', function(res) {
            cb(res);
        });
    }
};

module.exports = burger;