module.exports = function(app, passport) {

    // Home 
    app.get('/', function(req, res) {
        res.render('index.ejs');
    })    

    // Login
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('Welcome to There') });
    }) 

    app.post('/login', passport.authenticate('login', {
        successRedirect: '/profile',
        failureRedirect: '/login', 
        failureFlash: true
    })) 


    // Signup
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('Sign up for a new account!') })
    })


    app.post('/signup', passport.authenticate('local', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    })); 

    // User profile 
    app.get('/profile', function(req, res) {
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
