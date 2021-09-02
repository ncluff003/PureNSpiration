const dotenv = require(`dotenv`);
class ErrorFactory extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.environment = process.env.ENVIRONMENT;
    this.status = `${statusCode}`.startsWith(`4`) ? `Failed` : `Error`; // This is checking if the Error Status Code begins with the number 4.
    this.isOperational = true; // This makes it so that this error assumes it is always an operational error.  Ones that can be predicted.

    Error.captureStackTrace(this, this.constructor);
  }

  _setEnvironment() {
    if (this.environment === `DEVELOPMENT`) {
      return console.log(this.environment);
    } else if (this.environment === `PRODUCTION`) {
      return console.log(this.environment);
    } else {
      return console.log(this.environment);
    }
  }
}

module.exports = ErrorFactory;

// _startErasing() {
//   this.interval = setInterval(() => {
//     this._erase(this.container, this.story, this.cursor);
//   }, 50);
// }
