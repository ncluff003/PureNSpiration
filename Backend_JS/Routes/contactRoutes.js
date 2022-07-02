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
const contactController = require(`./../Controllers/contactController`);
const projectRouter = require('./projectRoutes');
const blogRouter = require('./blogRoutes');
const aboutRouter = require('./aboutRoutes');

////////////////////////////////////////////
//  Routing Middleware
router.route(`/`).get(contactController.contactMe).post(messageController.validateEmail, messageController.emailMe);

router.use(`/about`, aboutRouter);
router.use(`/projects`, projectRouter);
router.use(`/blog`, blogRouter);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
