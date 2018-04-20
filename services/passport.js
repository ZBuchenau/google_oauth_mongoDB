const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const privateKeys = require('../config/keys.js');

const User = mongoose.model('User');

passport.use(new GoogleStrategy({
  clientID : privateKeys.googleClientID,
  clientSecret : privateKeys.googleClientSecret,
  callbackURL : '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // search database for existing user
    User.findOne({googleId : profile.id})
      .then((existingUser) => {
        console.log(existingUser);
        if (existingUser){
          // user already exists
          console.log("USER ALREADY EXISTS...");
          done(null, existingUser);
        } else {
          // create new user
          new User({
            googleId : profile.id,
            firstName : profile.name.familyName,
            lastName : profile.name.givenName,
            email : profile.emails[0].value,
            gender : profile.gender,
            photo : profile.photos[0].value
          })
          .save()
          .then( user => done(null, user));
        }
      })

  })
);
