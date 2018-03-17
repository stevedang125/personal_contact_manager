// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

router.get('/profile', (req,res,next)=>{
    res.send('This is a http GET profile request.');
});

router.get('/dashboard', (req,res,next)=>{
    res.send('This is a http GET dashboard request.');
});

router.post('/dashboard/add_contact', (req,res,next)=>{
    res.send('This is a http POST dashboard add contact.');
});

router.put('/dashboard/update_contact', (req,res,next)=>{
    res.send('This is a http PUT dashboard update contact request.');
});

router.delete('/dashboard/delete_contact/:id', (req,res,next)=>{
    res.send('This is a http DELETE dashboard delete contact request.');
});

module.exports = router;

