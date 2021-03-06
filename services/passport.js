"use strict";

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const privateKeys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // generate identifying piece of code to place in cookie.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // search database for user, and then call done when found
  User.findById(id)
  .then( user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID : privateKeys.googleClientID,
  clientSecret : privateKeys.googleClientSecret,
  callbackURL : '/auth/google/callback',
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  console.log("here");
    // search database for existing user
    const existingUser = await User.findOne({googleId : profile.id});
      if (existingUser){
        // user already exists. Return existing user.
        done(null, existingUser);
      }
      // User does not exist, create a new one
      const user = await new User({
        googleId : profile.id,
        firstName : profile.name.familyName,
        lastName : profile.name.givenName,
        email : profile.emails[0].value,
        gender : profile.gender
      }).save();
      done(null, user);
  })
);
