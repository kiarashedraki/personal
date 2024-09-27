const User = require('../models/userModel');
const userService = require('../services/userService');

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.findAllUsers();
    res.json(users);
  } catch (err) {
    next(err); // Pass errors to middleware
  }
};

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      name,
      email,
      password
    });

    await user.save();

    res.status(201).json(user);
  } catch (err) {
    next(err); // Pass errors to middleware
  }
};
