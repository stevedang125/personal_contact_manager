# Create new user schema, salt hash pw with bcrypt, add the user to the database, test it by POSTMAN:
## 1. Create new user scheme:
Create a "models/user.js" folder and user.js file.

Bring in the dependencies
```
const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
```
Create an object or Schema to hold the new user info
```
var userSchema = Schema({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});
```
Export the user schema, save it to the 'users' collection:
```
const User = module.exports = mongoose.model('User', userSchema, 'users');
```
Create a helper function to add the user schema to the mLab database,
use bcrypt to salt and hash the password before add it to the db:
```
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
```

## 2. POST method for /register route:
Bring in the user schema and helper functions to add/register the user to the mLab database
```
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
```
## 3. POSTMAN:
Make a POST request to localhost:8080/register
```
Header:
Key:Content-Type    Value:application/x-www-form-urlencoded
Body: 
x-www-form-urlencoded
```
{
    "success": true,
    "msg": "User registered!"
}

Finished! Success!