const { application } = require("express");
const express = require("express");
const {
  getAllData,
  getOneData,
  deleteById,
  updateData,
  createTodo,
} = require("../controllers/todoController");

const TodoRouter = express.Router();

TodoRouter.route("/").get(getAllData).post(createTodo);
TodoRouter.route("/:id").patch(updateData).delete(deleteById).get(getOneData);

module.exports = TodoRouter;

