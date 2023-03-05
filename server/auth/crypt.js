const bcrypt = require('bcrypt');

// syncronous hash
function hash(str)
{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(str, salt);
}

// syncronous compare
function compare(plaintxt, hashtxt)
{
    return bcrypt.compareSync(plaintxt, hashtxt);
}

module.exports = {hash, compare};