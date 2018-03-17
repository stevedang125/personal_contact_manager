# Create package.json and install dependencies, set up server and api routes, test api with POSTMAN:
## 1. Create package.json:
```
$ npm init
```
Bring in all the dependencies for the backend server:
```
    "dependencies": {
    "express": "*",
    "body-parser": "^1.18.2",
    "cors": "*",
    "bcryptjs": "*",
    "mongoose": "*",
    "jsonwebtoken": "*",
    "passport": "*",
    "passport-jwt": "*"
    },
```
Then install these dependencies:
```
$ npm install
```

## 2. Set up the server, connect to the database, create the RESTful API and test them with POSTMAN:
Bring in the requirements:
```
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const http = require('http');
const cors = require('cors');

// Bring in other path for db, secret, routes:
const config = require('./config/database');
const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contacts');
```
Create the port number:
```
const port = process.env.PORT || 8080;
const app = express();
```
Connect to the remote database:(mLab)
```
// Connect to mLab by mongoose
// Check for success/error connection
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
    console.log('Connected to the database!!!');
});
mongoose.connection.on('error', (err)=>{
    console.log('Err! Could not connect to the database: '+err);
});
```
Set the middleware for the server: 
```
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
```
Set up the API and routes:(these will be in routes/users.js and routes/contacts.js)
```
app.use('/', userRoutes);
app.use('/user', contactRoutes);
// For all other routes, send the user back to home:
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
```
Join with the Angular frontend after ng build:
```
app.use(express.static(path.join(__dirname+'public')));
```
Create a server on port 8080:
```
http.createServer(app).listen(port, ()=>{
    console.log('The magical backend server is running on port: '+port);
});
```
Create a public/index.html file for fun.
## 3. Database uri from mLab and secret(config/database.js):
```
module.exports = {
    database: '',
    secret: 'super_top_secret!Best_secure_service_like_iCloud_lol'
}
```
## 4. API Routes(routes/users.js and routes/contacts.js):
USER ROUTES: localhost:8080/login and localhost:8080/register(http POST request)

Bring in all the dependencies:
```
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');
```
Create the routes and export router:
```
router.post('/register', (req,res,next)=>{
    res.send('This is a http post register request.');
});

router.post('/login', (req,res,next)=>{
    res.send('This is a http post login request.');
});

module.exports = router;
```

After logged in routes:
USER ROUTES: 
localhost:8080/user/dashboard
localhost:8080/user/dashboard/add_contact
localhost:8080/user/dashboard/update_contact
localhost:8080/user/dashboard/delete_contact
```
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
```
Finished! Success! :)