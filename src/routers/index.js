const router = require('express').Router();

require('./users.router')(router);

require('./auth.router')(router);

require('./send-email.router')(router);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world' });
});

router.get('/dashboard', (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      throw new CustomError(401, 'Not Authenticated');
    }
    res.status(200).json({ user: req.user.username });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
