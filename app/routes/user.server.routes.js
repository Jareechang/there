var multer  = require('multer');
var upload = multer({ dest: './uploads/'});
var passport = require('passport');

module.exports = function(app) {

    var sequelize = models.sequelize;
    var user = require('./controllers/user.server.controller.js');
    
    app.post('/login', user.authenticate);
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
    app.post('/signup', user.signup); 
    app.get('/profile', user.profile)
    app.get('/logout', user.logout)
}

