// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

router.post('/register', (req,res,next)=>{
    res.send('This is a http post register request.');
});

router.post('/login', (req,res,next)=>{
    res.send('This is a http post login request.');
});

module.exports = router;

