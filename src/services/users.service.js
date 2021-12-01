const { usersModel } = require('../models');

module.exports = {
  async create({ username, password }) {
    if (!username || !password) {
      throw 'Username and password is required';
    }

    const newUser = new usersModel({ username, password });
    const createdUser = await newUser.save();
    return createdUser;
  },
};
