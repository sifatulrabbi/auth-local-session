const { errors } = require('../config');
const { usersModel } = require('../models');

module.exports = {
  async create({ username, password }) {
    try {
      const newUser = new usersModel({ username, password });
      const createdUser = await newUser.save();

      return createdUser;
    } catch (err) {
      throw new errors.InternalError(err);
    }
  },

  async find({ username, userId }) {
    if (username) {
      const user = await usersModel.findOne({ username });

      if (!user) {
        throw new errors.NotFoundException('User not found');
      }
      return user;
    }

    if (userId) {
      const user = await usersModel.findById(userId);

      if (!user) {
        throw new errors.NotFoundException('User not found');
      }
      return user;
    }
  },
};
