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
const reload = require('reload');
const nodemailer = require(`nodemailer`);

////////////////////////////////////////////
//  Third Party Config Files
dotenv.config({
  path: `./config.env`,
});

////////////////////////////////////////////
//  Middleware

////////////////////////////////////////////
//  My Modules
const catchAsync = require(`./../Utilities/catchAsync`);
const AppError = require(`./../Utilities/appError`);
const Email = require(`./../Models/emailModel`);

const emailMe = async (options) => {
  // 1. Create A Transporter
  console.log(`Step 1`);

  const transporter = nodemailer.createTransport({
    // host: `smtp.zoho.com`, // Saved in my email port.
    host: process.env.MAILTRAP_HOST,
    // port: 465, // Saved in my email port.
    port: process.env.MAILTRAP_PORT,
    // secure: true, // use SSL
    auth: {
      // user: process.env.EMAIL_USERNAME,
      // pass: process.env.EMAIL_PW,
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
    // Activate Less Secure App Option For Google
  });

  console.log(`Step 2`);
  // 2. Define The Email Options.
  const mailOptions = {
    from: `${options.firstName} ${options.lastName} <${options.email}>`,
    // from: `Nathan Cluff <ncluff003@zohomail.com>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };
  console.log(`Step 3`);
  // 3. Send The Email
  // console.log(transporter.sendMail(mailOptions));
  console.log(`Step 4`);
  await transporter.sendMail(mailOptions);
  /*

    Okay, I have a beef with Jonas for this.  He stated that the .sendMail method above would return a promise, & to use the term 'await' on it.  I would normally not doubt him on that, which even now, I feel like he's right.  Yet, somehow, the removal of it is what worked in this case.  Even though, my own code for my portfolio site somewhere else, I used 'await' on that same method.  I am a bit confused there, so I will withhold judgement for now.  All I know is this.  It worked without it, so I will have to play around with it on my own projects so I can more consistently make it work.

  */
  console.log(`Step 5`);
};

exports.validateEmail = catchAsync(async (request, response, next) => {
  const postBody = request.body;
  // if (!postBody.firstName.test(/^[A-Za-z]+$/) || !postBody.lastName.test(/^[A-Za-z]+$/)) {
  //   return next(new AppError(`First & Last Name Must Be All Letters`, 400));
  // }

  console.log(postBody);
  next();
});

exports.sendEmail = catchAsync(async (request, response, next) => {
  const postBody = request.body;
  console.log(process.env.MAILTRAP_PORT);
  console.log(`Attempting to send email`);
  await emailMe({
    firstName: postBody.firstName,
    lastName: postBody.lastName,
    email: postBody.email,
    subject: postBody.subject,
    message: postBody.message,
  });
  response.status(200).json({
    status: `Success`,
    message: `Your email has been sent. Thank you ${request.body.firstName} for reaching out! 😄`,
  });
  // response.status(200).render('base', {
  //   title: `Pure 'N' Spiration | Email Sent`,
  //   successMessage: `Your email has been sent! Thank you ${request.body.firstName}! 😄`,
  // });
});

exports.emailMe = catchAsync(async (request, response, next) => {
  const postBody = request.body;
  console.log(postBody);
  await new Email(
    postBody.firstName,
    postBody.lastName,
    postBody.organization,
    postBody.position,
    postBody.email,
    postBody.subject,
    postBody.message,
  ).contactMe();

  response.status(200).json({
    status: `Success`,
    message: `Your email has been sent. Thank you ${request.body.firstName} for reaching out! 😄`,
  });
});
