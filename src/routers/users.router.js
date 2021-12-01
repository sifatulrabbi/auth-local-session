const { usersService } = require('../services');

module.exports = function usersRouter(router) {
  router.post('/users', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await usersService.create({ username, password });
      res.status(201).json({ data: user });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  });
};
