const User = require('../models/userModel');

exports.findAllUsers = async () => {
  return await User.find();
};

exports.findUserById = async (id) => {
  return await User.findById(id);
};

exports.createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};
