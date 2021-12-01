const { sendEmail } = require('../services');
const { errors } = require('../config');

module.exports = function sendEmailRouter(router) {
  router.post('/send-email', (req, res, next) => {
    try {
      const { to, subject, text } = req.body;

      if (!to || !subject || !text) {
        throw new errors.NotFoundException(
          'to, subject, text fields are required'
        );
      }

      sendEmail({ to, subject, text });
      res.status(200).json({ message: 'email sent' });
    } catch (err) {
      if (err.status) {
        next(err);
      } else {
        next(new errors.Exception(500, err));
      }
    }
  });
};
