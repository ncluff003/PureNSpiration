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
const calendar = require(`./../Models/calendarModel`);

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
//  Exported Controllers

// MAKE REQUEST FOR AND STORE DATA FROM JSON FILE.
let pureData = JSON.parse(fs.readFileSync(`${__dirname}/../Data/pureData.json`, 'utf-8'));

exports.aboutMe = catchAsync(async (request, response) => {
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

exports.getProfileLinks = catchAsync(async (request, response, next) => {
  const data = pureData;
  const profileLinks = data.profileLinks;
  response.status(200).json({
    status: `Success`,
    data: {
      profileLinks: profileLinks,
    },
  });
});

exports.getFoundation = catchAsync(async (request, response, next) => {
  const foundation = pureData;
  response.status(200).json({
    status: `Success`,
    data: {
      foundation: foundation,
    },
  });
});

exports.getInterests = catchAsync(async (request, response, next) => {
  const data = pureData;
  const interests = data.about[1];
  response.status(200).json({
    status: `Success`,
    data: {
      interests: interests,
    },
  });
});

exports.getSkills = catchAsync(async (request, response, next) => {
  const data = pureData;
  const skills = data.about[2];
  response.status(200).json({
    status: `Success`,
    data: {
      skills: skills,
    },
  });
});

exports.renderFoundation = catchAsync(async (request, response, next) => {
  data = pureData;
  response.status(200).render(`about-foundation`, {
    title: `Pure 'N' Spiration | About Me -- Foundation`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.renderInterests = catchAsync(async (request, response, next) => {
  data = pureData;
  response.status(200).render(`about-interests`, {
    title: `Pure 'N' Spiration | About Me -- Interests`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.renderSkills = catchAsync(async (request, response, next) => {
  data = pureData;
  response.status(200).render(`about-skills`, {
    title: `Pure 'N' Spiration | About Me -- Skills`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});
