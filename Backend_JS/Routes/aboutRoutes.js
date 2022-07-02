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

router.route(`/`).get(aboutController.aboutMe);
router.route(`/foundation`).get(aboutController.getFoundation);
router.route(`/profileLinks`).get(aboutController.getProfileLinks);
router.route(`/interests`).get(aboutController.getInterests);
router.route(`/skills`).get(aboutController.getSkills);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
