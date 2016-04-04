var localStrategy = require('passport').Strategy;
var User = require('../models').User;

//User.create({ firstName: "em", lastName: "Cool", password: "dogs", passwordConfirmation: "dogs", email: "em@world.com"})
User.findById(19)
    .then(function(user){
        console.log("password is ... " + user.validPassword("dogs"));
    })

module.exports = function(passport) {

    passport.serializeUser(function(user, done){
        done(null, cb);
    })
}

