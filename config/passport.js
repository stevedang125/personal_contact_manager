// Bring in passport jsonwebtoken strategy
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Bring in helper function to look for username, compare pw
const User = require('../models/user');

// Bring in the 'secret' from config/database:
const config = require('./database');

module.exports = function(passport){
    let options = {};

    // Extract jwt from the authorization from the header
    // (there are many ways to do this though)
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    options.secretOrKey = config.secret;

    // User new jwt strategy, pass in the options, get a callnback,
    // in the callback, the payload will includes the user information
    // When the user is trying to access an auth. route, this method will 
    // use the token to check if there is a valid user with this token or not.
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        User.getUserById(jwt_payload._id, (err, user)=>{
            if(err){
                return done(err, false);
            }
            // if based on the id, a user is found, return null err and user's information
            // *********** becareful on this *********, might not want to send everything back
            // if(user){
            //     return done(null, user);
            // }else{
            //     return done(null, false);
            // }
            return (user) ? done(null, user) : done(null, false);

        });
    }));
}
