class Exception {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

module.exports = {
  Exception: Exception,

  BadRequestException: function (message = 'Bad request') {
    return new Exception(400, message);
  },

  UnauthorizedException: function (message = 'Unauthorized') {
    return new Exception(401, message);
  },

  NotFoundException: function (message = 'Data not found') {
    return new Exception(404, message);
  },

  InternalError: function (message = 'Internal error') {
    return new Exception(500, message);
  },
};
