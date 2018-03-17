// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

// Bring in the user schema and helper functions to add/register the user
// to the mLab database
const User = require('../models/user');


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

router.post('/login', (req,res,next)=>{
    res.send('This is a http post login request.');
});

module.exports = router;

