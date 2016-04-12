var multer  = require('multer');
var upload = multer({ dest: './uploads/'});
var passport = require('passport');
var user = require('./controllers/user.server.controller.js');
var fileUpload = require('./controllers/file.server.controller.js');

module.exports = function(app) {
    app.post('/login', user.isLoggedIn, user.authenticate);
    app.post('/avatar/upload', user.isLoggedIn, upload.single('avatar'), 
    app.post('/signup', user.isLoggedIn, user.signup); 
    app.get('/profile', user.isLoggedIn,  user.profile)
    app.get('/logout', user.isLoggedIn, user.logout)
}
