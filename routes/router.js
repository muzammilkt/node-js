const express = require('express');
const TodoRouter = require('./todoRoutes');
const userRoutes = require('./userRoutes');
const router = express.Router();

router.use('/todo',TodoRouter);
router.use('/user',userRoutes);

module.exports = router;