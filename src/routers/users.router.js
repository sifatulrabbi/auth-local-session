const { usersService } = require('../services');
const { errors } = require('../config');

module.exports = function usersRouter(router) {
  router.post('/users', async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw new errors.NotFoundException('Username and password is required');
      }
      const user = await usersService.create({ username, password });

      res.status(201).json({
        message: 'User created',
        username: user.username,
      });
    } catch (err) {
      err.status ? next(err) : next(new errors.InternalError());
      next(err);
    }
  });

  router.get('/users/:username', async (req, res, next) => {
    try {
      const username = req.params['username'];
      const user = await usersService.find({ username });

      if (!user) {
        throw new errors.NotFoundException('User not found');
      }

      res.status(201).json({ username: user.username });
    } catch (err) {
      err.status ? next(err) : next(new errors.InternalError());
      next(err);
    }
  });
};
