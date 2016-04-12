var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');

var models = require("./models/");

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var glob = require('glob');
var path = require('path');

var env = require('./config/env/all.js') || {};

/**
 * configuration ––––––––––––––––––––––––––––––––––––––
 */
require('./config/passport')(passport,models);

app.use(morgan('dev'));  // handling loging in conosle
app.use(cookieParser()); // handling cookies
app.use(bodyParser());   // handling info from html forms

app.set('view engine', 'ejs'); // use EJS for templating

app.use(express.static(__dirname + '/public')); // Serve static pages

app.use(session({ secret: env.authLocal.secret }));
app.use(passport.initialize());
app.use(passport.session());  // persistent login 
app.use(flash());

/**
 * routes ––––––––––––––––––––––––––––––––––––––
 */

glob.sync('./app/routes/**/*.js').forEach(function(file){
    require(path.resolve(file))(app);
})

models.sequelize.sync().then(function () {
    app.listen(port);
})

console.log('stuff is happening on ' + port);
