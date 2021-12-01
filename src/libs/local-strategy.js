const { Strategy } = require('passport-local');
const { authService } = require('../services');

module.exports = new Strategy(authService.validateUser);
