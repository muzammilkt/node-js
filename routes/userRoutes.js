const express = require('express');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.route('/register' , userController.createUser);
userRoutes.route('/login' , userController.loginUser);

module.exports = userRoutes;