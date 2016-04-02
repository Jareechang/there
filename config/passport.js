var localStrategy = require('passport').Strategy;
var User = require('../models').User;

var user = User.build({ firstName: "em", lastName: "Cool", password: "dogs", passwordConfirmation: "dogs", email: "em@world.com"})
user.save();

module.exports = function(passport) {

    passport.serializeUser(function(user, done){
        done(null, cb);
    })
}

