var localStrategy = require('passport').Strategy;
var User = require('../models').User;

module.exports = function(passport) {

    passport.serializeUser(function(user, done){
        done(null, cb);
    })

    passport.deserializeUser(function(id, done){
        User.findById(id)
            .then(function(user){
                done(err,user);
            })
    })

    passport.user('local-signup', new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
        
    }, function(req, firstName, lastName, email, password,passwordConfirmation, done){

        process.nextTick(function(){

            var userEmail = email;

            User.findOrCreate({
                where: {
                    email: userEmail 
                }
            })
            .then(function(user){
                if(user) {
                    return done(null, false, req.flash('signUpMessage', 'Email is already taken'));
                }
                else  {

                    var newUser = User.build(
                                   firstName: firstName,
                                    lastName: lastName
                                       email: email,
                        passwordConfirmation: passwordConfirmation,
                                    password: password
                    );

                    newUser.save()
                        .then(function(user){
                            return done(null, user)
                        })
                        .error(function(err){
                            throw err;
                        });
                }
            })
            .error(function(err){
                return done(err);
            })
        })

    }))
}

