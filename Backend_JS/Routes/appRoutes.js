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

// CONTROLLERS
const appController = require(`./../Controllers/appController`);

// ROUTERS
const projectRouter = require('./projectRoutes');
const blogRouter = require('./blogRoutes');
const aboutRouter = require('./aboutRoutes');
const contactRouter = require('./contactRoutes');

////////////////////////////////////////////
//  Routing Middleware
router.route(`/`).get(appController.renderApp);

router.use(`/about`, aboutRouter);
router.use(`/projects`, projectRouter);
router.use(`/blog`, blogRouter);
router.use(`/contact`, contactRouter);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
