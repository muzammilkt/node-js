const { Request, Response, response } = require("express");
const Todo = require("../models/Todo");
const todoService = require("../services/todoService");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description This is conroller
 */

//create
const createTodo = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      details: req.body.details,
    };
    const create = await todoService.create(data);
    res.json(create);
  } catch (error) {
    res.json(error.message);
  }
};

//getall data
const getAllData = async (req, res) => {
  try {
    const getAll = await todoService.list();
    res.json(getAll);
  } catch (error) {
    res.json(error.message);
  }
};

//get one
const getOneData = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await todoService.show(id);
    res.json(item);
  } catch (err) {
    res.json(err.message);
  }
};

//delete
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await todoService.distroy(id);
    if (deleteItem) {
      res.json("delete successfully");
    } else {
      res.json("failed to delete data");
    }
  } catch (error) {
    res.json(error.message);
  }
};

//update
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { details, title } = req.body;
    const data = { title, details };
    const updateData = await todoService.edit(id, data);
    if(updateData.modifiedCount){
      res.json("updated");
      return
    }
    res.json("updation");
  } catch (error) {
    console.log(error);
    res.json(error.message);

  }
};

module.exports = {
  getAllData,
  getOneData,
  createTodo,
  deleteById,
  updateData,
};
