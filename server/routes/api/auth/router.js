// route: /api/auth

const express = require('express');
const { compare } = require('../../../auth/crypt');
const { sign } = require('../../../auth/jwt');
const { authenticate } = require('../../../auth/middleware');
const User = require('../../../db/models/User');
const router = express.Router();

// login route
// return token if success
router.post('/login', (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (!user)
        {
            return res.status(404).json({error: {name: 'AuthError', message: 'wrong credentials'}});
        }
        if (!compare(req.body.password, user.password))
        {
            return res.status(404).json({error: {name: 'AuthError', message: 'wrong credentials'}});
        }
        const token = sign({userid: user._id});
        res.json({data: token});
    })
})

// return username and role 
router.get('/info', authenticate, (req, res) => {
    const query = User.findOne({_id: req.userid});
    query.select('username role');
    query.exec(function (err, user) {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        return res.json({data: user});
    })
})


module.exports = router;