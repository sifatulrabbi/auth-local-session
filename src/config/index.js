require('dotenv').config();

module.exports = {
  port: parseInt(process.env['PORT'] || '3000', 10),

  mongoUri: process.env['MONGODB_URI'],

  sessionSecret: process.env['SESSION_SECRET'],

  errors: require('./errors'),

  connectDb: require('./connect-db'),

  emailSenderAcc: process.env['EMAIL_SENDER_ACCOUNT'],

  emailSenderAccPass: process.env['EMAIL_SENDER_ACCOUNT_PASS'],
};
