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
const projectController = require(`./../Controllers/projectController`);

////////////////////////////////////////////
//  Routing Middleware
// router.route(`/`).get(appController.fetchData);
router.route(`/`).get(projectController.viewMyWork);
router.route(`/all`).get(projectController.getAllProjects);
router.route(`/latest`).get(projectController.getLatestProject);
// router.route(`/about`).get(appController.introduceMe);
// router.route(`/projects`).get(appController.viewMyWork);
// router.route(`/contact`).get(appController.contactMe).post(messageController.validateEmail, messageController.emailMe);
////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
