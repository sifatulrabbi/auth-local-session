module.exports = function serializer(user, done) {
  if (user._id) {
    done(null, user._id);
    return;
  }
  done('User not found');
};
