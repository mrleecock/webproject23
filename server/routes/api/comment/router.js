// route: /api/comment

const express = require('express');
const { authenticate, get_role } = require('../../../auth/middleware');
const Comment = require('../../../db/models/Comment');
const router = express.Router();

// get all comments that belong to specific post 
// 'user' and 'edit_user' paths are populated
router.get('/post/:postid', (req, res) => {
    let query = Comment.find({post: req.params.postid});
    query.populate('user', '_id username role');
    query.populate('edit_user', '_id username role');
    query.exec((err, comments) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        res.json({data: comments});
    })
})

// get comment
router.get('/:commentid', (req, res) => {
    Comment.findOne({
        _id: req.params.commentid
    }, (err, comment) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        res.json({data: comment});
    })
})

// add new comment
router.post('/post/:postid', authenticate,(req, res) => {
    Comment.create({
        text: req.body.text,
        post: req.params.postid,
        user: req.userid 
    }, (err, comment) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        res.json({data: comment});
    })
})

// update comment
router.put('/:commentid', [authenticate, get_role], (req, res) => {
    Comment.findOne({
        _id: req.params.commentid
    }, async (err, comment) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (comment.user != req.userid && req.userrole != 'admin')
        {
            return res.status(401).json({error: {name: 'Error', message: 'AuthError'}});
        }
        comment.text = req.body.text; 
        comment.edit_user = req.userid;
        await comment.save();
        res.json({data: comment}); 
    })
})

// delete comment
router.delete('/:commentid', [authenticate, get_role], (req, res) => {
    Comment.findOne({
        _id: req.params.commentid
    }, async (err, comment) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (comment.user != req.userid && req.userrole != 'admin')
        {
            return res.status(401).json({error: {name: 'Error', message: 'AuthError'}});
        }
        await Comment.deleteOne({
            _id: req.params.commentid
        })
        res.json({data: true});
    })

})

module.exports = router;