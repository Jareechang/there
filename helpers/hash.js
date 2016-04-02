var bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 *  @method setHashedPassword
 *  @param {String} - value: User's password
 *  @param {Function} - success callback function (ex. store password into DB)
 *
 * */

function setHashedPassword(value,cb) {
    bcrypt.hash(value, saltRounds, function(err, hash) {
        // Callback function passing in new hash
        if(err) return cb(err);
        cb(hash);
    });
}

function comparePassword(plainText, hash,cb) {
    bcrypt.compare(plainText,hash, function(err, res){
        if(err) return cb(err);
        cb(res);
    })
}

module.exports = {}
module.exports.setPassword = setHashedPassword;
module.exports.equal = comparePassword;

