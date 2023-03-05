// route: /api/register


const express = require('express');
const { hash } = require('../../../auth/crypt');
const User = require('../../../db/models/User');
const router = express.Router();

// register new user
router.post('/', (req, res) => {
    let password = hash(req.body.password);
    let role = req.body.role ? 'admin' : 'user';
    User.create({
        username: req.body.username,
        password: password,
        role: role
    }, (err, user) => {
        if (err) 
        {
            if (err.code == 11000) // duplicate username
            {
                return res.status(400).json({error: {name: 'Error', message: 'username already exist.'}})
            }
            return res.status(500).json({error: err});
        }
        res.json({data: {success: true}});
    })
})

module.exports = router;