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
const appController = require(`./../Controllers/appController`);
const messageController = require(`./../Controllers/messageController`);
const blogController = require(`./../Controllers/blogController`);

////////////////////////////////////////////
//  Routing Middleware
// router.route(`/`).get(appController.fetchData);
router.route(`/posts/latest`).get(blogController.getLatestPost);

router.route(`/`).get(blogController.renderBlog);
router.route(`/posts`).get(blogController.getAllPosts);
router.route(`/posts/:id`).get(blogController.getPost);
router.route(`/about`).get(appController.introduceMe);
router.route(`/projects`).get(appController.viewMyWork);
router.route(`/contact`).get(appController.contactMe).post(messageController.validateEmail, messageController.emailMe);
////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
