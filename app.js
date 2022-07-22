const { response } = require("express");
const express = require("express");
const todo = require("./routes/todoRoutes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require('./routes/router');
dotenv.config();
const PORT = process.env.PORT || 3005;
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("connected to database Successfully..."))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',router);

app.listen(PORT, console.log(`app is running in the post ${PORT}...`));
