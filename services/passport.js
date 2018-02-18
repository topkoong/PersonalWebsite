const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//done is a callback of passport
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// id is user.id
// we're going to turn a user id to mongoose model
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // we already have a record with a given profile ID
            done(null, existingUser); // tell passport we're finished here. Here's the user we've just found
          } else {
            // we don't have a user record with this id, make a new record.
            new User({ googleId: profile.id }) // create a mongoose model instance
              .save()
              .then(user => done(null, user));
          }
        })

    }
  )
);
