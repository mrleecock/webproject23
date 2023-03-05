const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRETIME = 60*20; // 20 minutes



// return jwt token
function sign(payload, expire_time = EXPIRETIME)
{
    let token = jwt.sign(payload, SECRET_KEY, {expiresIn: expire_time})
    return token;
}

// validate token
function verify(token)
{
    try {
        var decoded = jwt.verify(token, SECRET_KEY);
        return {success: true, decoded};
    } catch(err) {
        return {success: false};
    }
}


module.exports = {verify, sign};