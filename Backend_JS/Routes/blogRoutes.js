////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules
const express = require('express');

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Middleware
const router = express.Router();

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  My Middleware

const blogController = require(`./../Controllers/blogController`);

////////////////////////////////////////////
//  Routing Middleware

router.route(`/posts/latest`).get(blogController.getLatestPost);

router.route(`/`).get(blogController.renderBlog);
router.route(`/posts`).get(blogController.getAllPosts);
router.route(`/posts/:id`).get(blogController.getPost).post(blogController.getSpecificPost);
// router.route(`/posts?page=&limit`).get(blogController.getAllPosts);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
