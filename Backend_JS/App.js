////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules
const express = require('express');
const path = require('path');

////////////////////////////////////////////
//  Third Party Module Instances
const App = express();

////////////////////////////////////////////
//  Third Party Middleware

////////////////////////////////////////////
//  Third Party Config Files
App.set(`view engine`, `pug`);
App.set(`views`, path.join(__dirname, `Views`));
App.use(express.static(path.resolve(`${__dirname}/../`, `Public/`)));
App.use(express.urlencoded({ extended: true, limit: '10kb' }));

////////////////////////////////////////////
//  Routing Middleware
const appRouter = require(`./Routes/appRoutes`);

////////////////////////////////////////////
//  My Middleware
App.use(`/`, appRouter);

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Controllers

////////////////////////////////////////////
//  My Middleware

////////////////////////////////////////////
//  App Global Error Handling Middleware

App.all(`*`, (request, response, next) => {
  response.status(404).json({
    status: `Failed`,
    message: `Failed to find ${request.originalUrl}`,
  });
  next();
});

////////////////////////////////////////////
//  Exporting App
module.exports = App;
