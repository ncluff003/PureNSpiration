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
const contactRouter = require('./contactRoutes');

////////////////////////////////////////////
//  Routing Middleware
router.route(`/`).get(appController.renderApp);
router.route(`/About`).get(appController.renderApp);
router.route(`/Portfolio`).get(appController.renderApp);
router.route(`/Portfolio/:project`).get(appController.renderApp);
router.route(`/Resume`).get(appController.renderApp);
router.route(`/Contact`).get(appController.renderApp);
router.route(`/Hire`).get(appController.renderApp);
router.route(`/data`).get(appController.returnMyData);

router.use('/Contact', contactRouter);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
