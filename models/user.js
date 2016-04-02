'use strict';

// Export to a hash module
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
            id: { type: DataTypes.INTEGER, autoIncrement: true },
      username: { type: DataTypes.STRING,  allowNull: false, unique: true },
         email: { type: DataTypes.STRING,  allowNull: false, unique: true },
      password: { 
          type: DataTypes.STRING, 
          allowNull: false, 
          unique: true,
          set: function(val) {
          }
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instaceMethods: {

    }
  });
  return User;
};
