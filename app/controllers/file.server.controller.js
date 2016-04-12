exports.image = function(req,res,next){
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
