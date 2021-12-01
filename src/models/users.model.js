const { model, Schema } = require('mongoose');

const usersSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model('users', usersSchema);
