// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

// Bring in passport and jwt to protect these routes
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Bring in the contact schema from models
const Contact = require('../models/contact');

// const ObjectId = mongoose.Types.ObjectId;
// const Schema = mongoose.Schema;

router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    console.log('This is a http GET profile request.');
    res.json({user: req.user});
});

router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    //res.send('This is a http GET dashboard request.');
    res.json({user: req.user});
});

router.post('/dashboard/add_contact', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    // Create a new object to hold the new contact informaiton from the request.body
    let newContact = new Contact({
        _id : req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        preferredName: req.body.preferredName,
        address: req.body.address,
        email: req.body.email,
        homePhone: req.body.homePhone,
        cellPhone: req.body.cellPhone,
        user_id: req.body.user_id
    });

    Contact.addContact(newContact, (err, contact)=>{
        (err) ? res.json({success: false, msg: 'Error! Failed to add new contact.'}) : res.json({success: true, msg: 'Contact registered!'});
    });

    // res.send('This is a http POST dashboard add contact.');
    // res.json({user: req.user});
});

router.put('/dashboard/update_contact', passport.authenticate('jwt', {session: false}), (req,res,next)=>{

    Contact.getContactById(req.body._id, (err, contact)=>{
        if(err){
            res.status(500).json({errmsg:'Failed to find contact to update, here is the err: '+err});
        }
        // Successful found the contact, ready to update it:
        contact._id = req.body._id,
        contact.firstName = req.body.firstName,
        contact.lastName = req.body.lastName,
        contact.preferredName = req.body.preferredName,
        contact.address = req.body.address,
        contact.email = req.body.email,
        contact.homePhone = req.body.homePhone,
        contact.cellPhone = req.body.cellPhone,
        contact.user_id = req.body.user_id

        Contact.addContact(contact, (err, savedContact)=>{
            if(err){
                res.status(500).json({success: false, msg:'Failed to update, here is the err: '+err});
            }else{
                res.status(200).json({success: true, msg: 'Contact updated!'});
            }
        });

    });
    // res.send('This is a http PUT dashboard update contact request.');
    // res.json({user: req.user});
});

router.delete('/dashboard/delete_contact/:id', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    // res.send('This is a http DELETE dashboard delete contact request.');
    res.json({user: req.user});
});

module.exports = router;

