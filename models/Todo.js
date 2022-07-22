const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: String,
  details: String,
});
module.exports = mongoose.model('Todo', TodoSchema)
