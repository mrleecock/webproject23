const User = require('../db/models/User');
const jwt = require('./jwt');

// check token and get userid
function authenticate(req, res, next)
{
    let token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    
    if (!token)
    {
        return res.status(401).json({error: {name: 'AuthError', message: 'No token'}});
    }
    let verify = jwt.verify(token);
    if (!verify.success)
    {
        return res.status(401).json({error: {name: 'AuthError', message: 'Token expired'}});
    }
    req.userid = verify.decoded.userid;
    next();
}

// get users role
// run after 'authenticate' middleware
function get_role(req, res, next)
{
    User.findOne({
        _id: req.userid
    }, (err, user) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        req.userrole = user.role;
        next();
    })
}



module.exports = {authenticate, get_role};