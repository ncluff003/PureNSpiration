module.exports = (fn) => (request, response, next) => fn(request, response, next).catch((error) => next(error));
