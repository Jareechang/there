var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
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

app.use(morgan('dev'));  // handling loging in conosle
app.use(cookieParser()); // handling cookies
app.use(bodyParser());   // handling info from html forms

app.set('view engine', 'ejs'); // use EJS for templating

console.log(env.authLocal.secret);

