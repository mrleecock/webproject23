// route: /api/post

const express = require('express');
const { authenticate, get_role } = require('../../../auth/middleware');
const Comment = require('../../../db/models/Comment');
const Post = require('../../../db/models/Post');
const Vote = require('../../../db/models/Vote');
const router = express.Router();

// get posts using GET parameters
    // filter: RegEx string
    // page: offset
    // posts_per_page: page size
// 'user' and 'edit_user' paths are populated
router.get('/', (req, res) => {
    let filter = req.query.filter ?? '';
    let page = req.query.page ?? 1;
    let posts_per_page = req.query.posts_per_page ?? 10;

    let regex_filter = new RegExp(filter, "i");

    let query = Post.find({
        title: regex_filter
    });
    query.populate('user', '_id username role');
    query.populate('edit_user', '_id username role');
    query.limit(posts_per_page);
    query.skip(posts_per_page*(page-1));
    query.sort({createdAt: -1});
    query.select('-_v');
    query.exec((err, posts) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        res.json({data: posts});
    })
})

// add new post
router.post('/', authenticate, (req, res) => {
    Post.create({
        title: req.body.title,
        text: req.body.text,
        code_body: req.body.code_body,
        user: req.userid
    }, (err, post) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        res.json({data: post});
    })
})

// update post
router.put('/:postid', [authenticate, get_role], (req, res) => {
    Post.findOne({
        _id: req.params.postid
    }, async (err, post) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (post.user != req.userid && req.userrole != 'admin')
        {
            return res.status(401).json({error: {name: 'Error', message: 'AuthError'}});
        }
        post.title = req.body.title;
        post.text = req.body.text;
        post.code_body = req.body.code_body;
        post.edit_user = req.userid;
        post.editedAt = new Date();
        await post.save();
        res.json({data: post});
    })
});

// add/edit vote
router.post('/:postid/vote', authenticate, (req, res) => {
    let vote_value = req.body.positive_vote == "true" ? 1 : -1;
    Vote.findOne({
        post: req.params.postid,
        user: req.userid
    }, async (err, vote) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (!vote) // new vote
        {
            Vote.create({
                value: vote_value,
                user: req.userid,
                post: req.params.postid
            }, async (err, vote) => {
                if (err)
                {
                    return res.status(500).json({error: err});
                }
                // update cache
                let post = await Post.findOne({_id: req.params.postid})
                post.cached_vote_count = post.cached_vote_count + vote_value;
                await post.save();
                res.json({data: vote});
            })
        }
        else // update old vote
        {
            if (vote_value != vote.value)
            {
                vote.value = vote_value;
                await vote.save();
                // update cache
                let post = await Post.findOne({_id: req.params.postid})
                post.cached_vote_count = post.cached_vote_count + (vote_value*2);
                await post.save();
                
            }
            res.json({data: vote});
        }
    })
})

// delete post
router.delete('/:postid', [authenticate, get_role], (req, res) => {
    Post.findOne({
        _id: req.params.postid
    }, async (err, post) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (post.user != req.userid && req.userrole != 'admin')
        {
            return res.status(401).json({error: {name: 'Error', message: 'AuthError'}});
        }
        // delete comments
        await Comment.deleteMany({
            post: post._id
        });
        await Vote.deleteMany({
            post: req.params.postid
        });

        await Post.deleteOne({_id: req.params.postid});
        res.json({data: true});
    })
})

// get total count of posts using GET parameters
    // filter: RegEx string
router.get('/count', (req, res) => {
    let filter = req.query.filter ?? '';
    let regex_filter = new RegExp(filter, 'i');
    let query = Post.where({
        title: regex_filter
    }).countDocuments();

    query.exec((err, count) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        res.json({data: count});
    })
})

// get post
// 'user' and 'edit_user' paths are populated
router.get('/:postid', (req, res) => {
    let query = Post.findOne({
        _id: req.params.postid
    }) 
    query.populate('user', '_id username role'); 
    query.populate('edit_user', '_id username role'); 
    query.exec((err, post) => {
        if (err)
        {
            return res.status(500).json({error: err});
        }
        if (!post)
        {
            return res.status(404).json({error: {name: 'Error', message: 'Not Found'}})
        }
        res.json({data: post});
    })
})


module.exports = router;