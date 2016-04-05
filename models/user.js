'use strict';

var hash = require('../helpers/hash.js');

module.exports = function(sequelize, DataTypes) {

    /* Model Defition ––––––––––––––––––– */ 

    var User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        firstName: { type: DataTypes.STRING,  allowNull: false, unique: true },
        lastName: { type: DataTypes.STRING,  allowNull: false, unique: true },
        email: { 
             type: DataTypes.STRING,
             allowNull: false, 
             unique: true
        },
        image_url: { 
             type: DataTypes.STRING,
             allowNull: true 
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        passwordConfirmation: {
            type: DataTypes.VIRTUAL,
        },
        passwordDigest: { 
            type: DataTypes.STRING, 
            validate: {
                notEmpty: true
            }
        }
    }, {
        underscored: false,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        },
        instanceMethods: {
            fullName: function() {
                return this.firstName + " " + this.lastName;
            }, 
            validPassword: function(password) {
                return hash.validPassword(password, this.passwordDigest);
            },
            getImage: function() {
                return this.get('image_url');
            }

        }
    });

    /* Model Methods ––––––––––––––––––– */ 

    var hasSecurePassword = function(user, options, next) {
        hash.setPassword(user.password, function(err,hash){
            if(err) return console.log(err);
            user.passwordDigest = hash;
            return next(null,options);
        })
    }

    /* Model Callbacks ––––––––––––––––––– */ 

    User.beforeValidate(function(user, options, next){
        // email lower case 
        user.email = user.email.toLowerCase();

        if(user.password != user.passwordConfirmation) 
            throw new Error("password and password confirmation does not match");

        if(user.password) 
            hasSecurePassword(user, options, next);
    })

   return User;
};

