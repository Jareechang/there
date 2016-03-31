var Sequelize = require("sequelize");
var env = require("../../config/env/all.js");
var db = env.db;

var sequelize = new Sequelize(db.name,db.username ,db.password , {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000

    },
    // SQLite only
    //   storage: 'path/to/database.sqlite'
    //
});

sequelize.authenticate().then(function(errors) { console.log(errors); });
