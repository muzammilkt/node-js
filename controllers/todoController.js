const { Request, Response, response } = require("express");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description This is conroller
 */

const todoData = ["muzammil", "nihal", "fayis", "suhail"];

const getAllData = function (req, res) {
  res.send(todoData);
};

const getOneData = function (req, res) {
  res.send("get one");
};

const createTodo = function (res, req) {
  res.send("creat");
};

const deleteById = function (req, res) {
  res.send("delete");
};

const updateData = function (req, res) {
    res.send('update');
};

module.exports = {
  getAllData,
  getOneData,
  createTodo,
  deleteById,
  updateData,
};
