const { response } = require('express');
const express = require('express');
const todo = require('./routes/todoRoutes');
const dotenv=require("dotenv");

dotenv.config();
const PORT = process.env.PORT||3005;

const app = express();
app.use('/todo',todo);

//middleware
app.use(express.json())

app.listen(PORT,console.log(`app is running in the post ${PORT}...`));
