const router = require('express').Router();

require('./users.router')(router);

require('./auth.router')(router);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world' });
});

router.get('/dashboard', (req, res) => {
  req.isAuthenticated()
    ? res.status(200).json({ user: req.user.username })
    : res.status(401).json({ message: 'Not Authenticated' });
});

module.exports = router;
