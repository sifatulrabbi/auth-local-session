const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailSenderAcc,
    pass: config.emailSenderAccPass,
  },
});

module.exports = function sendEmail({ to, subject, text }) {
  const mailOptions = {
    from: config.emailSenderAcc,
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      const error = new config.errors.Exception(500, err);
      console.log(err);
      throw new error();
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
