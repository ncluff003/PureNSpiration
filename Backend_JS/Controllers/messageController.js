////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules
const express = require(`express`);
const pug = require(`pug`);

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  Middleware

////////////////////////////////////////////
//  My Modules
const catchAsync = require(`./../Utilities/catchAsync`);
const AppError = require(`./../Utilities/appError`);
const Validate = require(`./../Models/validationModel`);
const Email = require(`./../Models/emailModel`);

////////////////////////////////////////////
//  Exported Controllers
exports.validateEmail = catchAsync(async (request, response, next) => {
  try {
    const postBody = request.body;
    console.log(postBody);
    console.log(`Validating Email. 🤞`);
    // if (!Validate.isName(postBody.firstName)) {
    //   return next(new AppError(`Your first name is not valid`), 400);
    // }
    if (!Validate.isName(postBody.firstName)) throw new Error(`Please give your first name with letters only.`);
    if (!Validate.isName(postBody.lastName)) throw new Error(`Please give your last name with letters only.`);
    if (!Validate.isCompany(postBody.organization)) throw new Error(`Please provide your company's name without the following characters: #, %, *, =, +`);
    if (!Validate.isCompanyPosition(postBody.position))
      throw new Error(`Please provide your position in the company without the following characters: \`, ~, !, @, #, $, %, ^, &, *, +, =, <, >, ?, |, [, ].`);
    if (!Validate.isEmail(postBody.email)) throw new Error(`Please provide a valid email address with a valid extension.`);
    if (!Validate.isValidEmailSubject(postBody.subject))
      throw new Error(
        `Please tell me the subject of this message using letters, numbers, & the following symbols: ~, !, $, %, #, *, (, ), -, |, ?, ., :, ', ", `,
      );
    if (postBody.message === '') throw new Error(`Please do not leave message box empty.`);
    console.log(Validate.isEmail(postBody.email));
    console.log(`Email Passed Validation! 😄`);
  } catch (error) {
    return response.status(400).json({
      status: 'Error',
      message: error.message,
    });
  }
  next();
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
