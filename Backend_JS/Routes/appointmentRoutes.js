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
const messageController = require(`../Controllers/messageController`);
const contactController = require(`../Controllers/contactController`);
const appointmentController = require(`../Controllers/appointmentController`);

////////////////////////////////////////////
//  Routing Middleware
// router.route(`/`).get(contactController.contactMe).post(messageController.validateEmail, messageController.emailMe);
router.route(`/`).get(appointmentController.getData).post(messageController.validateEmail, messageController.emailMe);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
