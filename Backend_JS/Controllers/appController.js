////////////////////////////////////////////
//  Core Modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

////////////////////////////////////////////
//  Third Party Modules

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Middleware

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  My Middleware
const catchAsync = require(`./../Utilities/catchAsync`);

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Controllers

exports.fetchData = catchAsync(async (request, response, next) => {
  console.log(`Fetching...`);
  // GET DATA FROM JSON FILE.
  let pureData = JSON.parse(fs.readFileSync(`${__dirname}/../Data/pureData.json`, 'utf-8'));

  console.log(pureData);
  // STORE DATA FOR USE.
  request.data = pureData;
  next();
});

exports.renderApp = catchAsync(async (request, response) => {
  const data = request.data;
  console.log(data);
  response.status(200).render(`base`, {
    title: `Pure 'N' Spiration | Home`,
    data: data,
    errorMessage: '',
    successMessage: '',
  });
});

exports.introduceMe = catchAsync(async (request, response) => {
  response.status(200).render(`about`, {
    title: `Pure 'N' Spiration | About Me`,
    errorMessage: '',
    successMessage: '',
  });
});

exports.viewMyWork = catchAsync(async (request, response) => {
  response.status(200).render(`projects`, {
    title: `Pure 'N' Spiration | My Work`,
    errorMessage: '',
    successMessage: '',
  });
});

exports.contactMe = catchAsync(async (request, response) => {
  response.status(200).render(`contact`, {
    title: `Pure 'N' Spiration | Contact Me`,
    errorMessage: '',
    successMessage: '',
  });
});
