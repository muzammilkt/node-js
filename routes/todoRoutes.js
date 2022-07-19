const { application } = require('express');
const express = require('express');
const {getAllData,getOneData,deleteById,updateData,createTodo} = require('../controllers/todoController');
const router = express.Router();

router.get('./' , getAllData);
// router.route('./').get(getAllData).post(createTodo);
// router.route('./:id').get(getOneData).delete(deleteById).patch(updateData);
module.exports=router;
