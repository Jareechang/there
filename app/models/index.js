"use strict";

var fs = require("fs");
var Sequelize = require("sequelize");
var config = require("../../config/env/all.js").db.config[env];
var db = {};

// Database connection 
var sequelize = new Sequelize(config.name,config.username ,config.password ,config);

fs.readdirSync(__dirname)
    .filter(function(file){
        return (file.indexOf('.') !== 0) && (file != "index.js");
    })
    .forEach(function(file){
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    })

Object.keys(db).forEach(function(modelName){
    if("associate" in model[modelName]) {
        db[modelName].associate(db);
    }
})

// append db connection to object
db.sequelize = sequelize;
// append Sequelize to Object
db.Sequelize = Sequelize;

modules.exports = db;
