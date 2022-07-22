const express = require("express");
const User = require("../models/User");
const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const create = await User.create(email, password);
    res.json(create);
  } catch (error) {
    req.json(error.message);
  }
};

const loginUser = async (req , res) => {
  try {
    
  } catch (error) {
    res.json(error.message);
  }
}

module.exports = {
  createUser,
  loginUser
};
