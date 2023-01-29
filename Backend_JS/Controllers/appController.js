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
const { sendEmail, email } = require('./../Utilities/Email');

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

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = (user, statusCode, method, request, response, template, title, optionalData, status, message) => {
  const token = signToken(user.id);
  if (method === `json`) {
    return response.status(statusCode).json({
      status: `${status}`,
      message: `${message}`,
    });
  }
  if (method === `render`) {
    return response.status(statusCode).render(`${template}`, {
      title: title,
      token,
      data: {
        user: user,
        ...optionalData,
      },
    });
  }
};

// MAKE REQUEST FOR AND STORE DATA FROM JSON FILE.
let freeLancerInfo = JSON.parse(fs.readFileSync(`${__dirname}/../Data/appointments.json`, 'utf-8'));
let pureData = JSON.parse(fs.readFileSync(`${__dirname}/../Data/pureData.json`, 'utf-8'));

exports.returnMyData = catchAsync(async (request, response, next) => {
  const data = pureData;

  response.status(200).json({
    status: `Success`,
    data,
  });
});

exports.renderApp = catchAsync(async (request, response) => {
  const data = pureData;
  response.status(200).render(`base`, {
    title: `Pure 'N' Spiration | Home`,
    data: {
      data: data,
      calendar: calendar,
    },
    errorMessage: '',
    successMessage: '',
  });
});

exports.getInfo = catchAsync(async (request, response) => {
  response.status(200).json({
    status: `Success`,
    data: freeLancerInfo,
  });
});

exports.askForAppointment = catchAsync(async (request, response) => {
  console.log(request.body);
  await new sendEmail(request.body).sendAppointmentRequest();
});

exports.scheduleAppointment = catchAsync(async (request, response) => {
  let details = request.params;
  console.log(details);
  let appointment = {
    index: freeLancerInfo.appointments.length,
    date: details.date,
    start: details.start,
    end: details.end,
    startTime: details.startTime,
    endTime: details.endTime,
    attendees: [],
    type: details.communicationPreference,
  };
  let myDetails = {
    name: `${details.myFirstName} ${details.myLastName}`,
  };
  let theirDetails = {
    name: `${details.firstname} ${details.lastname}`,
    phoneNumber: details.phoneNumber,
    email: details.email,
  };

  appointment.attendees.push(myDetails);
  appointment.attendees.push(theirDetails);
  freeLancerInfo.appointments.push(appointment);
  fs.writeFileSync(`${__dirname}/../Data/appointments.json`, JSON.stringify(freeLancerInfo));

  await new sendEmail(details).sendConfirmation();

  response.status(200).json({
    status: `Success`,
    data: {
      appointments: freeLancerInfo.appointments,
      details: details,
    },
  });
});

exports.sendDeclinedAppointment = catchAsync(async (request, response) => {
  console.log(request.body);
  const details = request.body;

  await new email(details.firstname, details.lastname, details.email, details.subject, details.message).sendDeclinedAppointment();
});

exports.declineAppointment = catchAsync(async (request, response) => {
  console.log(request.params);
  // await new sendEmail(request.params).sendDeclinedAppointment();
  response.status(200).render(`_declined-Appointment`, {
    title: `Appointment Declined Message`,
    data: request.params,
  });
});
