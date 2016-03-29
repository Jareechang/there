var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//var configDB = require('./config/database.js');

var env = require('./config/env/all.js') || {};

/**
 * configuration ––––––––––––––––––––––––––––––––––––––
 */
// require('./config/passport')(passport);

app.use(morgan('dev'));  // handling loging in conosle
app.use(cookieParser()); // handling cookies
app.use(bodyParser());   // handling info from html forms

app.set('view engine', 'ejs'); // use EJS for templating

app.use(session({ secret: env.authLocal.secret }));
app.use(passport.initialize());
app.use(passport.session());  // persistent login 
app.use(flash());

/**
 * routes ––––––––––––––––––––––––––––––––––––––
 */

require('./app/routes.js')(app, passport); // Load routes with app && loaded passport as depedencies

app.listen(port);

console.log('stuff is happen on ' + port);

