const { Strategy } = require('passport-local');
const validateUser = require('./validate-user');

module.exports = new Strategy(validateUser);
