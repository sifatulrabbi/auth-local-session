module.exports = function errorHandler(err, req, res, next) {
  if (!err) {
    next();
    return;
  }

  res.status(err.status).json({
    statusCode: err.status,
    error: err.message,
  });
};
