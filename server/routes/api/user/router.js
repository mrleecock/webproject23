// route: /api/user

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { authenticate } = require('../../../auth/middleware');
const User = require('../../../db/models/User');
const Image = require('../../../db/models/Image');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
const path = require('path');

// get user by username
router.get('/un/:username', (req, res) => {
    User.findOne({
        username: req.params.username
    }, '_id username role').exec((err, user) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        res.json({data: user});
    })
})


// get user image by username
router.get('/image/un/:username', (req, res) => {
    User.findOne({username: req.params.username}, (err, user) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (!user.image)
        {
            return res.sendFile(`def.png`, {root: path.join(__dirname)});
            //return res.sendFile('/home/lee/koulu/CT30A3204_web/project/server/res/def.png');
        }
        Image.findOne({_id: user.image}, (err, image) => {
            if (err)
            {
                return res.status(500).json({error: err});
            }
            res.set('Content-Type', image.mimetype);
            res.set('Content-Disposition', 'inline');
            res.set('Content-Length', image.image.length);
            res.send(image.image);
        })
    })

})


// add user image
router.post('/image', upload.single('pic'), authenticate, (req, res) => {

    User.findOne({
        _id: req.userid
    }, (err, user) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (user.image)
        {
            // delete old image
            Image.deleteOne({_id: user.image});
        }
        Image.create({
            image: req.file.buffer,
            mimetype: req.file.mimetype
        }, async (err, image) => {
            if (err)
            {
                return res.status(500).json({error: err});
            }
            user.image = image._id;
            await user.save();
            res.json({data: true});
        })

    })    
})


module.exports = router;