"use strict";

const express = require('express');
const mongoose = require('mongoose');
const privateKeys = require('./config/keys.js');
require('./models/User');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');

mongoose.connect(privateKeys.mongoURI);


const app = express();

authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
