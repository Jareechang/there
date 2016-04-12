var passport = require('passport');
var user = require('../controllers/user.server.controller.js');

module.exports = function(app) {
    app.post('/login', user.isLoggedIn, user.authenticate);
    app.post('/signup', user.isLoggedIn, user.signup); 
    app.get('/profile', user.isLoggedIn,  user.profile);
    app.get('/logout', user.isLoggedIn, user.logout);
}
