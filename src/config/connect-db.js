const mongoose = require('mongoose');

module.exports = function connectDb(uri) {
  mongoose
    .connect(uri, { autoIndex: false, autoCreate: false })
    .then(() => {
      console.log('Connected to db');
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
