"use strict";

const mongoose = require('mongoose');
const { Schema } = mongoose; // equals const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId : String,
  firstName : String,
  lastName : String,
  email : String,
  gender: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);



















//
