const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser); // Ensure this line exists

module.exports = router;
