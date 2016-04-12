var staticPages = require('../controllers/static.server.controller.js');

module.exports = function(app) {
    app.get('/', staticPages.home);
    app.get('/login', staticPages.login) 
    app.get('/signup', staticPages.signUp);
}
