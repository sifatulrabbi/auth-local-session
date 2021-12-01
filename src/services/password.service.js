const bcrypt = require('bcrypt');

module.exports = {
  async genPass(password) {
    return await bcrypt.hash(password, 12);
  },

  async validPass(password, hash) {
    return await bcrypt.compare(password, hash);
  },
};
