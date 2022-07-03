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
const aboutController = require(`./../Controllers/aboutController`);

////////////////////////////////////////////
//  Routing Middleware

// RENDERING PAGES
router.route(`/`).get(aboutController.aboutMe);
router.route(`/foundation`).get(aboutController.renderFoundation);
router.route(`/interests`).get(aboutController.renderInterests);
router.route(`/skills`).get(aboutController.renderSkills);

// GETTING DATA
router.route(`/profileLinks`).get(aboutController.getProfileLinks);
router.route(`/foundation/data`).get(aboutController.getFoundation);
router.route(`/interests/data`).get(aboutController.getInterests);
router.route(`/skills/data`).get(aboutController.getSkills);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
