// Bring in the dependencies
const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Create an object or Schema to hold the new user info
var userSchema = Schema({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const User = module.exports = mongoose.model('User', userSchema, 'users');

// ====== Helper functions ==========:

// Register Users:
module.exports.registerUser = function(newUser, callback){
    // New User info coming in with raw password.
    // Gotta add some salt and hash for a better taste:
    bcrypt.genSalt(10, (err, salt)=>{
        if(err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// Login look up username:
module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}
// Login compare password:
module.exports.comparePassword = function(input_password, hash, callback){
    bcrypt.compare(input_password, hash, (err, match)=>{
        if(err) throw err;
        callback(null, match);
    })
}

// Passport, JWT token:
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}