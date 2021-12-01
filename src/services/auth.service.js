const usersService = require('../services/users.service');
const { validPass } = require('./password.service');
const { errors } = require('../config');

module.exports = {
  async validateUser(username, password, done) {
    const user = await usersService.find({ username });

    if (/* validPass(password, user.password) */ user.password === password) {
      done(null, user);
      return;
    }

    done(new errors.UnauthorizedException('Incorrect credentials'), false);
  },

  async deserializer(userId, done) {
    const user = await usersService.find({ userId });

    if (!user) {
      done(new errors.NotFoundException('User not found'), false);
      return;
    }

    done(null, user);
  },

  serializer(user, done) {
    if (!user && !user._id) {
      done(new errors.NotFoundException('User not found'));
      return;
    }

    done(null, user._id);
  },
};
