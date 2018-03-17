# Bring in passport in server, create passport.js file, username lookup & compare pw, generate a token:
## 1. Bring in passport strategy in server.js:
User need to log in to access user's profile and dashboard:
```
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
```
## 2. Create "models/passport.js" for JWT strategy and extract jwt from the header for authentication:
Bring in passport jsonwebtoken strategy:
```
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
```
Bring in helper function to look for username, compare pw:
```
const User = require('../models/user');
```
Bring in the 'secret' from config/database:
```
const config = require('./database');
```
This strategy is from the passport and jwt docs:
```
module.exports = function(passport){
    let options = {};

    // Extract jwt from the authorization from the header
    // (there are many ways to do this though)
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    options.secretOrKey = config.secret;

    // User new jwt strategy, pass in the options, get a callnback,
    // in the callback, the payload will includes the user information
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        User.getUserById(jwt_payload._id, (err, user)=>{
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            }else{
                return done(null, false);
            }
        });
    }));
}
```
## 3. Create two helper functions in models/user.js:
Login look up username:
```
module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}
```
Login compare password:
```
module.exports.comparePassword = function(input_password, hash, callback){
    bcrypt.compare(input_password, hash, (err, match)=>{
        if(err) throw err;
        callback(null, match);
    })
}
```
Passport, JWT token:
```
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}
```
## 4. POST login function in routes/users.js:
Bring in passport and jwt for authentication
```
const passport = require('passport');
const jwt = require('jsonwebtoken'); 
```
Look for the registered user, if there is one, generate a token save to access other authenticated routes:
```
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
```

## 5. Test the route in POSTMAN:
Make a POST request to localhost:8080/login
```
Header:
Key:Content-Type    Value:application/x-www-form-urlencoded
Body: 
x-www-form-urlencoded
{
    "success": true,
    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWFkOGQzZjljNjE2NTQzNzg2ZDdjYjEiLCJuYW1lIjoiaGFycnlwb3R0ZXIiLCJlbWFpbCI6ImhhcnJ5QGhvbWUuY29tIiwidXNlcm5hbWUiOiJoYWlyeSIsInBhc3N3b3JkIjoiJDJhJDEwJDZ5U1UuajhoWlRXMEE4OTlVWjBFWS5PUk5hSzJ5VXFWd3ZCeU9sRlBzbjkuTUdJeFNTNDVlIiwiX192IjowLCJpYXQiOjE1MjEzMjQwOTksImV4cCI6MTUyMTkyODg5OX0.0Yp333M0PdgPqpvGDIzBtutPuYTDwR7Pj7gLeRYRwf8",
    "user": {
        "id": "5aad8d3f9c616543786d7cb1",
        "name": "harrypotter",
        "username": "hairy",
        "email": "harry@home.com"
    }
}
```
Finished! Success! :)