var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport,models) {

    var User = models.User;

    passport.serializeUser(function(user, done){
        done(null, user.id);
    })

    passport.deserializeUser(function(id, done){
        User.findById(id)
            .then(function(user){
                done(null,user);
            }).error(function(err){
                done(err);
            })
    })

    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req,email, password,done){

        User.find({
            where: {
                email: email 
            }
        })
        .then(function(user){
            if(!user) {
                return done(null,false, req.flash('message', 'User not found.'));
            }

            if(!user.validPassword(password)) {
                return done(null, false, req.flash('message', 'Invalid password'));
            }

            return done(null, user);
        })
        .error(function(err){
            return done(err);
        })
    }))

    passport.use('local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done){

        process.nextTick(function(){

            var userEmail = email;
            var param = req.body;

            User.find({
                where: {
                    email: userEmail 
                }
            })
            .then(function(user){
                if(user) {
                    return done(null, false, req.flash('signUpMessage', 'Email is already taken'));
                }
                else  {
                    var newUser = User.build({ firstName: param.firstName,
                                                lastName: param.lastName,
                                                   email: email,
                                    passwordConfirmation: param.passwordConfirmation,
                                                password: password });

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

