////////////////////////////////////////////
//  Core Modules
const https = require('https');
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
const calendar = require(`./../Models/calendarModel`);
const { request } = require('http');

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Controllers

// MAKE REQUEST FOR AND STORE DATA FROM JSON FILE.
let pureData = JSON.parse(fs.readFileSync(`${__dirname}/../Data/pureData.json`, 'utf-8'));

exports.renderApp = catchAsync(async (request, response) => {
  // const data = request.data;
  const data = pureData;
  response.status(200).render(`home`, {
    title: `Pure 'N' Spiration | Home`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });

  // response.status(200).json({
  //   status: `Success`,
  //   data: data,
  // });
});

exports.introduceMe = catchAsync(async (request, response) => {
  const data = pureData;
  response.status(200).render(`about`, {
    title: `Pure 'N' Spiration | About Me`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.viewMyWork = catchAsync(async (request, response) => {
  const data = pureData;
  response.status(200).render(`projects`, {
    title: `Pure 'N' Spiration | My Work`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.getBlog = catchAsync(async (request, response) => {
  const data = pureData;
  response.status(200).render(`blog`, {
    title: `Pure 'N' Spiration | Contact Me`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.getBlogPost = catchAsync(async (request, response) => {
  const data = pureData;
  response.status(200).render(`blogPost`, {
    title: `Pure 'N' Spiration | Contact Me`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.viewResume = catchAsync(async (request, response) => {
  const url = `./../My_Resume_Full-Stack.pdf`;
  const fileStream = fs.createWriteStream(`${url}`);
  response.pipe(fileStream);
  fileStream.on(`finish`, () => {
    fileStream.close();
    console.log(`File Downloaded.`);
  });
  // const data = pureData;
  // response.status(200).render(`resume`, {
  //   title: `Pure 'N' Spiration | Contact Me`,
  //   data: {
  //     data: data,
  //     calendar: calendar,
  //   },
  //   errorMessage: '',
  //   successMessage: '',
  // });
});

exports.contactMe = catchAsync(async (request, response) => {
  const data = pureData;
  response.status(200).render(`contact`, {
    title: `Pure 'N' Spiration | Contact Me`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});
