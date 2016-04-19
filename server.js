var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');

var models = require("./models/");

// Helpers
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var glob = require('glob');
var path = require('path');

var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webPackConfig = require("./webpack.config.js");

var env = require('./config/env/all.js') || {};

app.locals.isDevelopment = function() {
    return process.env.NODE_ENV !== "production";
}

console.log(process.env.NODE_ENV)


/**
 * configuration ––––––––––––––––––––––––––––––––––––––
 */
require('./config/passport')(passport,models);

/* Use webpack-dev middleware in development */

var compiler = webpack(webPackConfig);

app.use(webpackDevMiddleware(compiler, {

}));

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
