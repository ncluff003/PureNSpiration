////////////////////////////////////////////
//  Core Modules

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

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Modules

////////////////////////////////////////////
// Error Child Class -- AppError
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(`4`) ? `Failed` : `Error`; // This is checking if the Error Status Code begins with the number 4.
    this.isOperational = true; // This makes it so that this error assumes it is always an operational error.  Ones that can be predicted.

    Error.captureStackTrace(this, this.constructor);
    return this;
  }
}

module.exports = AppError;
