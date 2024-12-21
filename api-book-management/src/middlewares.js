// eslint-disable-next-line import/no-unresolved
import httpStatus from 'http-status';
import Response from './utils/Response.js';

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const { statusCode = httpStatus.INTERNAL_SERVER_ERROR, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };

  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', err);
  }

  res.status(statusCode).send(response);
}

export default {
  notFound,
  errorHandler,
};
