"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username : {  DataTypes.STRING, allowNull: false, unique: true}, 
        email : {  DataTypes.STRING, allowNull: false, unique: true}, 
        password : {  
            DataTypes.STRING, allowNull: false, unique: true
        } 
    })

}
