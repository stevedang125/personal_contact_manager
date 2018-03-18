# Create a new schema to add contacts, set the database collection, use POSTMAN to test it:
## 1. Create a new js file for new contacts:
Create "models/contact.js", bring in the dependencies:
```
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;
```
Create an object or Schema to hold the new contact information
```
var contactSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    preferredName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    homePhone: { type: String, required: true },
    cellPhone: { type: String, required: true },
    user_id: { type : String }
});
```
Exports it, set the database collection that it will be saved in,
and helper function to save the new contact:
```
const Contact = module.exports = mongoose.model('Contact', contactSchema, 'contactlist');

// ================= Helper functions =========================

// Add a new contact to the database
module.exports.addContact = function(newContact, callback){
    newContact.save(callback);
}
```
## 2. POST request in "routes/contacts.js":
Bring in the contact schema from models:
```
const Contact = require('../models/contact');

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
```
## 3. Use POSTMAN to test this add function:
Make a POST request to: localhost:8080/user/dashboard/add_contact
```
Header:
Authorization   JWT token
Content-Type    application/json
Body:(raw)
{
	"firstName":"harry",
	"lastName":"potter",
	"preferredName":"hairy",
	"address": "123 address",
    "email": "email@home.com",
    "homePhone": "9898989898",
    "cellPhone": "8989898989",
    "user_id": "random98"
}
and then:
{
    "success": true,
    "msg": "Contact registered!"
}
```
Finished! Success! :)