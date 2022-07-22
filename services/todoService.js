const todoModel = require("../models/Todo");

const create = async (data) => {
  try {
    const createData = await todoModel.create(data);
    return createData;
  } catch (error) {
    return error.message;
  }
};

const list = async () => {
  try {
    const get = await todoModel.find();
    return get;
  } catch (error) {
    return error.message;
  }
};

const edit = async (id, data) => {
  try {
    const editedData = await todoModel.updateOne({_id:id}, data);
    return editedData;
  } catch (error) {
    return error.message;
  }
};

const show = async (id) => {
  try {
    const item = await todoModel.findById(id);
    return item;
  } catch (error) {
    return error.message;
  }
};

const distroy = async (id) => {
  try {
    console.log(id)
    const deleteItem = await todoModel.findByIdAndDelete(id);
    return deleteItem;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  list,
  edit,
  show,
  distroy,
};
