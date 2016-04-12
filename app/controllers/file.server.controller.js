exports.image = function(req,res,next){
    var user = req.user;

    if(!req.file) 
        throw new Error("req.file does not exist");

    user.updateImageUrl
        .then(function(results){
            res.redirect('/profile');
        })
        .error(function(err){
            next(err);
        })
})
