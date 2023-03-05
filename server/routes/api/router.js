// route: /api

const express = require('express');
const router = express.Router();

const user_router = require('./user/router.js');
const comment_router = require('./comment/router.js');
const auth_router = require('./auth/router.js');
const post_router = require('./post/router.js');
const register_router = require('./register/router');

router.use("/user", user_router);
router.use("/comment", comment_router);
router.use("/auth", auth_router);
router.use("/post", post_router);
router.use("/register", register_router);


module.exports = router;