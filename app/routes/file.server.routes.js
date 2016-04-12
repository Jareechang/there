var multer  = require('multer');
var upload = multer({ dest: './uploads/'});
var user = require('../controllers/user.server.controller.js');
var fileUpload = require('../controllers/file.server.controller.js');

module.exports = function(app) {
    app.post('/avatar/upload', user.isLoggedIn, upload.single('avatar'), fileUpload.image);
}
