const { usersModel } = require('../models');

module.exports = async function deserializer(userId, done) {
  const user = await usersModel.findById(userId);

  if (!user) {
    done('User not found', false);
    return;
  }

  done(null, user);
};
