'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
      username: { type: DataTypes.STRING,  allowNull: false, unique: true },
         email: { type: DataTypes.STRING,  allowNull: false, unique: true },
      password: { type: DataTypes.STRING,  allowNull: false, unique: true },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
