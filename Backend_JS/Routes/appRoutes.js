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
const projectRouter = require('./projectRoutes');
const blogRouter = require('./blogRoutes');
const aboutRouter = require('./aboutRoutes');
const contactRouter = require('./contactRoutes');

////////////////////////////////////////////
//  Routing Middleware
// router.route(`/`).get(appController.fetchData);
router.route(`/`).get(appController.renderApp);

router.use(`/about`, aboutRouter);
router.use(`/projects`, projectRouter);
router.use(`/blog`, blogRouter);
router.use(`/contact`, contactRouter);
// router.route(`/contact`).get(appController.contactMe).post(messageController.validateEmail, messageController.emailMe);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
