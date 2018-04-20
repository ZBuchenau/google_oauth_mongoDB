const mongoose = require('mongoose');
const { Schema } = mongoose; // equals const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId : String,
  firstName : String,
  lastName : String,
  email : String,
  gender: String
});

mongoose.model('User', userSchema);
