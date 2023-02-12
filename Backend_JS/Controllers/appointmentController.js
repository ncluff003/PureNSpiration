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
const catchAsync = require(`../Utilities/catchAsync`);
const calendar = require(`../Models/calendarModel`);

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules
// const Owner = require('penciled/Private/Models/ownerModel.cjs');
const Owner = require('../Models/ownerModel');

////////////////////////////////////////////
//  Exported Controllers

// MAKE REQUEST FOR AND STORE DATA FROM JSON FILE.
let pureData = JSON.parse(fs.readFileSync(`${__dirname}/../Data/pureData.json`, 'utf-8'));

exports.getData = catchAsync(async (request, response) => {
  console.log(await Owner.find());
  const owners = await Owner.find();
  // console.log(request.body.model);
  // const Owner = request.body.model;
  // const owners = Owner.find();
  response.status(200).json({
    status: 'Success',
    data: owners,
  });
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
