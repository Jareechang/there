var passport = require('passport');
var User = require("./models/").User;

exports.authenticate =  passport.authenticate('login', {
    successRedirect: '/profile',
    failureRedirect: '/login', 
    failureFlash: true
})

exports.profile = function(req, res) {
    if(!req.user) return res.redirect('/login');
    res.render('profile.ejs', {
        user : req.user
    }) 
}

exports.signup =  passport.authenticate('local', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
})

exports.logout = function(req, res) {
    res.logout();
    res.redirect('/');
}

// Authenticate middleware

export.isLoggedIn = function(req,res,next) {
    // If they are authenicated, then proceed
    if(req.isAuthenticated()) 
        return next();
    
    // For anything else, redirect to root 
    res.redirect('/');
}
