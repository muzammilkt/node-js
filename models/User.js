const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true,'Email is must be given'],
    unique: true,
    
  },
  password: {
    type: String,
    required: [true,'Password is required'],
    min:6
  },
});

module.exports = mongoose.model("User", userSchema);
