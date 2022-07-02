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
const aboutController = require(`./../Controllers/aboutController`);

////////////////////////////////////////////
//  Routing Middleware
// router.route(`/`).get(appController.fetchData);
router.route(`/`).get(aboutController.introduceMe);
router.route(`/foundation`).get(aboutController.getFoundation);
router.route(`/profileLinks`).get(aboutController.getProfileLinks);
router.route(`/interests`).get(aboutController.getInterests);
router.route(`/skills`).get(aboutController.getSkills);
// router.route(`/latest`).get(projectController.getLatestProject);
// router.route(`/about`).get(appController.introduceMe);
// router.route(`/projects`).get(appController.viewMyWork);
// router.route(`/contact`).get(appController.contactMe).post(messageController.validateEmail, messageController.emailMe);
////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
