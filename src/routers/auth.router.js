const passport = require('passport');

module.exports = function authRouter(router) {
  router.post('/auth/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ user: req.user });
  });
};
