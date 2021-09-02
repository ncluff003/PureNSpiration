// This is an ERROR class which is a common practice to help with constructing the error that each kind of error needs.  So, it will be very generalized as well, including extending the Error Object.
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(`4`) ? `Failed` : `Error`; // This is checking if the Error Status Code begins with the number 4.
    this.isOperational = true; // This makes it so that this error assumes it is always an operational error.  Ones that can be predicted.

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
