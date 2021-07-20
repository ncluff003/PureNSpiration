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

////////////////////////////////////////////
//  Middleware

////////////////////////////////////////////
//  My Modules

const App = express();

App.use(express.static(path.join(__dirname, '../Public')));

App.get('/', (request, response) => {
    return response.sendFile(`${__dirname}/../Public/index.html`);
});

module.exports = App;