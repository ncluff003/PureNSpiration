////////////////////////////////////////////
//  Core Modules
const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////////////////
//  Third Party Modules
const express = require('express');
const path = require(`path`);
const dotenv = require('dotenv');
const bodyParser = require(`body-parser`);
const pug = require('pug');

////////////////////////////////////////////
//  Middleware

////////////////////////////////////////////
//  My Modules
const appRouter = require(`./Routes/appRoutes`);
const App = express();

App.set(`view engine`, `pug`);
App.set(`views`, path.join(__dirname, `Views`));
// The only reason this works is because of express.static rather than giving the route handler an actual route to handle for the root.
// App.use(express.static(`${__dirname}../Public`));

// App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.urlencoded({ extended: true, limit: '10kb' }));
// App.use(express.static(path.join(__dirname, `../Public`)));

App.use(express.static(path.resolve(`${__dirname}/../`, `Public/`)));
// Eventually, I will make this so that if the query string is both the root '/', or a hash symol after a forward slash '/#', the index.html page will be returned.

// App.use(`/v1/message`, messageRouter);
App.use(`/`, appRouter);

App.all(`*`, (request, response, next) => {
  response.status(404).json({
    status: `Failed`,
    message: `Failed to find ${request.originalUrl}`,
  });
  next();
});

module.exports = App;
