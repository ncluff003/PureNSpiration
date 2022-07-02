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
const blogRouter = require('./blogRoutes');

////////////////////////////////////////////
//  Routing Middleware
// router.route(`/`).get(appController.fetchData);
router.route(`/`).get(appController.fetchData, appController.renderApp);
router.route(`/about`).get(appController.introduceMe);
router.route(`/projects`).get(appController.viewMyWork);
router.route(`/resume`).get(appController.viewResume);
router.route(`/contact`).get(appController.contactMe).post(messageController.validateEmail, messageController.emailMe);

router.use(`/blog`, blogRouter);
////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
