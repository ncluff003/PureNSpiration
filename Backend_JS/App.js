////////////////////////////////////////////
//  Core Modules
const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////////////////
//  Third Party Modules
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require(`body-parser`);
const pug = require('pug');
const reload = require('reload');
const sanitizer = require(`express-autosanitizer`);

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  Third Party Middleware

////////////////////////////////////////////
//  My Middleware
const appRouter = require(`./Routes/appRoutes`);

////////////////////////////////////////////
//  My Modules
const App = express();

////////////////////////////////////////////
//  App Middleware
App.set(`view engine`, `pug`);
App.set(`views`, path.join(__dirname, `Views`));
App.use(express.urlencoded({ extended: true, limit: '10kb' }));
App.use(sanitizer.allUnsafe);
App.use(express.static(path.resolve(`${__dirname}/../`, `Public/`)));
App.use(`/`, appRouter);

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
