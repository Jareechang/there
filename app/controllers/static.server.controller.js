exports.home = function(req, res) {
    res.render('index.ejs');
}

exports.login = function(req, res) {
    res.render('login.ejs', { message: req.flash('Welcome to There') });
}

exports.signUp =  function(req, res) {
    res.render('signup.ejs', { message: req.flash('Sign up for a new account!') })
}

