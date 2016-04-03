var bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 *  @method setHashedPassword
 *  @param {String} - value: User's password
 *  @param {Function} - success callback function (ex. store password into DB)
 *
 * */

function setPassword(value,cb) {
    bcrypt.hash(value, saltRounds, function(err, hash) {
        // Callback function passing in new hash
        if(err) return cb(err);
        cb(null,hash);
    });
}

function equal(plainText, hash) {
    return bcrypt.compareSync(plainText, hash);
}

module.exports = {}
module.exports.setPassword = setPassword;
module.exports.equal = equal;

