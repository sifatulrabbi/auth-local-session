require('dotenv').config();

module.exports = {
  port: parseInt(process.env['PORT'] || '3000', 10),
  mongoUri: process.env['MONGODB_URI'],
  sessionSecret: process.env['SESSION_SECRET'],
  connectDb: require('./connect-db'),
};
