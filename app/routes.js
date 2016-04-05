var multer  = require('multer');
var upload = multer({ dest: './uploads/'});

module.exports = function(app, passport,models) {

    var User = models.User;
    var sequelize = models.sequelize;
    var currentUser = null;

    // Home 
    app.get('/', function(req, res) {
        res.render('index.ejs');
    })    
    app.post('/login', passport.authenticate('login', {
        successRedirect: '/profile',
        failureRedirect: '/login', 
        failureFlash: true
    })) 

    // Login
    app.get('/login', function(req, res) {
        if(currentUser) {
            console.log('current user = ', currentUser.firstName);
        }
        res.render('login.ejs', { message: req.flash('Welcome to There') });
    }) 

    // Signup
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('Sign up for a new account!') })
    })

    app.post('/avatar/upload', upload.single('avatar'), function(req,res,next){

        if(!req.file) 
            throw new Error("req.file does not exist");

        sequelize.query("UPDATE users set image_url= \'" + req.file.path + "\' where id = \'" + req.user.id + "\'" )
        .then(function(results){
            res.redirect('/profile');
        })
        .error(function(err){
            next(err);
        })
    })

    app.post('/signup', passport.authenticate('local', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    })); 

    // User profile 
    app.get('/profile', function(req, res) {
        // assign current user
        currentUser = req.user;

        if(!req.user) return res.redirect('/login');

        res.render('profile.ejs', {
            user : req.user
        }) 
    })

    // Logout
    app.get('/logout', function(req, res) {
        res.logout();
        res.redirect('/');
    })
}

// Authenticate middleware

function isLoggedIn(req,res,next) {
    // If they are authenicated, then proceed
    if(req.isAuthenticated()) 
        return next();
    
    // For anything else, redirect to root 
    res.redirect('/');
}
