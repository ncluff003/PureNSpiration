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
const appointmentRouter = require('./appointmentRoutes');

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
router.route(`/App/Info`).get(appController.getInfo);

router.use(`/about`, aboutRouter);
router.use(`/projects`, projectRouter);
router.use(`/blog`, blogRouter);
router.use(`/contact`, contactRouter);
router.use(`/Appointment`, appointmentRouter);

// router.route(`/`).get(appController.renderApp).post(authController.login);
router.route(`/App/Appointment`).post(appController.askForAppointment);
router
  .route(
    `/App/Appointments/:date/:startTime/:endTime/:start/:end/:email/:phoneNumber/:communicationPreference/:firstname/:lastname/:myFirstName/:myLastName/:myCompany`,
  )
  .get(appController.scheduleAppointment);
router
  .route(`/App/Appointments/Declined/:date/:startTime/:endTime/:start/:end/:email/:firstname/:lastname/:myFirstName/:myLastName/:myCompany`)
  .get(appController.declineAppointment);

router.route(`/App/Appointments/Declined/`).post(appController.sendDeclinedAppointment);
// router.route('/User').post(userController.searchForUser);
// router.use(`/Users`, userRouter);
// router.use('/API', APIRouter);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Router
module.exports = router;
