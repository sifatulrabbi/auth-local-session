const { usersModel } = require('../models');

module.exports = async function validateUser(username, password, done) {
  const user = await usersModel.findOne({ username });

  if (user && user.password === password) {
    done(null, user);
  }

  done('Incorrect credentials', false);
};
