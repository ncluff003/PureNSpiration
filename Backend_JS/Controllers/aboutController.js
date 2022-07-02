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
  const foundation = pureData.about[0];
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

exports.renderBlog = catchAsync(async (request, response) => {
  // const data = request.data;
  console.log(data);
  response.status(200).render(`blog`, {
    title: `Pure 'N' Spiration | Web SlingN -- Blog`,
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

exports.getLatestProject = catchAsync(async (request, response, next) => {
  console.log(`Project Fetching...`);
  let projects = pureData.projects;
  let latest = projects[projects.length - 1];
  console.log(latest);
  response.status(200).json({
    status: `Success`,
    data: latest,
  });
});

exports.getLatestPost = catchAsync(async (request, response, next) => {
  let posts = pureData.blog.data.posts;
  let latest = posts[posts.length - 1];
  response.status(200).json({
    status: `Success`,
    data: latest,
  });
});

exports.getBlog = catchAsync(async (request, response) => {
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
  response.status(200).render(`resume`, {
    title: `Pure 'N' Spiration | Contact Me`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.contactMe = catchAsync(async (request, response) => {
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
