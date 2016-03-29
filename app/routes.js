module.exports = function(app, passport) {

    // Home 
    app.get('/', function(req,res){
        res.render('index.ejs');
    })    
}
