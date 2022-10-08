////////////////////////////////////////////
//  Core Modules
const https = require('https');
const url = require('url');
const fs = require('fs');
const path = require('path');

////////////////////////////////////////////
//  Third Party Modules

const PDFDocument = require('pdfkit');

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

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Controllers

// MAKE REQUEST FOR AND STORE DATA FROM JSON FILE.
let pureData = JSON.parse(fs.readFileSync(`${__dirname}/../Data/pureData.json`, 'utf-8'));
let pdfDoc = new PDFDocument();
pdfDoc.pipe(fs.createWriteStream(`${__dirname}/../Data/N_Cluff_Resume--Full-Stack2.pdf`));

exports.returnMyData = catchAsync(async (request, response, next) => {
  const data = pureData;

  response.status(200).json({
    status: `Success`,
    data,
  });
});

exports.renderApp = catchAsync(async (request, response) => {
  const data = pureData;
  response.status(200).render(`app`, {
    title: `Pure 'N' Spiration | Home`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});
