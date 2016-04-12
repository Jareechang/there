var passport = require('passport');
var User = require("./models/").User;

exports.authenticate =  passport.authenticate('login', {
    successRedirect: '/profile',
    failureRedirect: '/login', 
    failureFlash: true
})

