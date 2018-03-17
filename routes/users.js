// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

// Bring in the user schema and helper functions to add/register the user
// to the mLab database
const User = require('../models/user');

// Bring in password and jwt for authentication
const passport = require('passport');
const jwt = require('jsonwebtoken'); 

// Register a new user
router.post('/register', (req,res,next)=>{
    // Create a new object for the new user,
    // assign the correct data from the request body
    // to correct var in the object/schema
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    // Call helper function in the models/user.js
    User.registerUser(newUser, (err, user)=>{
        if(err){
            res.json({success: false, msg: 'Error! Failed to register user.'});
        }else{
            res.json({success: true, msg: 'User registered!'});
        }
    });

    // res.send('This is a http post register request.');
});

// Look for the registered user, if there is one, generate a token
// save to access other authenticated routes
router.post('/login', (req,res,next)=>{
    // Get the username and pw from input data req body
    const username = req.body.username;
    const password = req.body.password;

    // Find the username in database:
    User.getUserByUsername(username, (err,user)=>{
        if(err){
            throw err;
        }
        if(!user){
            return res.json({success: false, msg: 'Username not found!'});
        }
        // Found the username, now compare the input password:
        // 3 params: inputpassword, user pw from database, callback
        User.comparePassword(password, user.password, (err, match)=>{
            if(err) throw err;
            // Same password, generate a token and send back the user info
            if(match){
                const token = jwt.sign(user.toJSON(), config.secret, {expiresIn:604800});
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user:{
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }else{
                res.json({success:false, msg: 'Wrong password! Please try again.'})
            }
        })
    })

    // res.send('This is a http post login request.');
});

module.exports = router;

