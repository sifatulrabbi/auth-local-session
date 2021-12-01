const passport = require('passport');

module.exports = function authRouter(router) {
  router.post(
    '/auth/login',
    passport.authenticate('local', {
      failureRedirect: '/auth/login',
    }),
    (req, res, next) => {
      try {
        res.redirect(`/users/${req.user.username}`);
      } catch (err) {
        next(err);
      }
    }
  );
};
