import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env['PORT'] || '5000', 10),
  mongoDbUri: process.env['MONGODB_URI'] || 'mongodb://127.0.0.1:27017/auth-passport-session-jwt',
  sessionSecret: process.env['SESSION_SECRET'] || 'keyboard cat',
  senderEmail: process.env['SENDER_EMAIL'] || 'john.doe@gmail.com',
  senderEmailPass: process.env['SENDER_EMAIL_PASS'] || '12345678',
};
