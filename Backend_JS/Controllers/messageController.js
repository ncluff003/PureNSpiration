////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  Third Party Middleware
const validator = require(`express-validator`);

////////////////////////////////////////////
//  My Middleware

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules
const catchAsync = require(`./../Utilities/catchAsync`);
const Validate = require(`./../Models/validationModel`);
const Email = require(`./../Models/emailModel`);

////////////////////////////////////////////
//  Exported Controllers
exports.validateEmail = catchAsync(async (request, response, next) => {
  try {
    // Make Easier Use Of Request Body
    const postBody = request.body;
    // Validate & More Importantly Sanitize With Express Validator
    console.log(`Validating Email. 🤞`);
    await validator.check('firstname').isEmpty().trim().escape().run(request);
    await validator.check('lastname').isEmpty().trim().escape().run(request);
    await validator.check('email').isEmpty().trim().escape().run(request);
    await validator.check('subject').isEmpty().trim().escape().run(request);
    await validator.check('message').isEmpty().trim().escape().run(request);

    // Start Validating Using My Own Validators Of What I Expect.
    if (!Validate.isName(postBody.firstname)) throw new Error(`Please give your first name with letters only.`);
    if (!Validate.isName(postBody.lastname)) throw new Error(`Please give your last name with letters only.`);
    if (!Validate.isEmail(postBody.email)) throw new Error(`Please provide a valid email address with a valid domain.`);
    if (!Validate.isValidEmailSubject(postBody.subject))
      throw new Error(`Please use only letters, numbers, & these symbols: ~, !, $, %, #, *, (, ), -, |, ?, ., :, ', ", in the subject`);
    if (postBody.message === '') throw new Error(`Please do not leave message box empty.`);
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
  try {
    const postBody = request.body;
    await new Email(postBody.firstname, postBody.lastname, postBody.email, postBody.subject, postBody.message).contactMe();

    console.log(`Email Sent.`);

    response.status(200).json({
      status: `Success`,
      message: `Email sent. Thank you ${request.body.firstName} for reaching out! 😄`,
    });
  } catch (error) {
    response.status(500).json({
      status: `Internal Error`,
      message: `Your email could not be sent.  Pleas try again later.`,
      error: error.message,
    });
  }
});
