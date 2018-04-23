"use strict";

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const privateKeys = require('./config/keys.js');
require('./models/User.js');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');

mongoose.connect(privateKeys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [privateKeys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
