// Bring in the dependencies
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

// Create an object or Schema to hold the new contact info
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


const Contact = module.exports = mongoose.model('Contact', contactSchema, 'contactlist');

// ================= Helper functions =========================

// Add a new contact to the database
module.exports.addContact = function(newContact, callback){
    newContact.save(callback);
}

// Update an existing contact in the database
module.exports.getContactById = function(id, callback){
    Contact.findById(id, callback);
}
