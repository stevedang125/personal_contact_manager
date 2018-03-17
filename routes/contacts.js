// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

// Bring in passport and jwt to protect these routes
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    console.log('This is a http GET profile request.');
    res.json({user: req.user});
});

router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    //res.send('This is a http GET dashboard request.');
    res.json({user: req.user});
});

router.post('/dashboard/add_contact', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    // res.send('This is a http POST dashboard add contact.');
    res.json({user: req.user});
});

router.put('/dashboard/update_contact', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    // res.send('This is a http PUT dashboard update contact request.');
    res.json({user: req.user});
});

router.delete('/dashboard/delete_contact/:id', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    // res.send('This is a http DELETE dashboard delete contact request.');
    res.json({user: req.user});
});

module.exports = router;

