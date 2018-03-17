
// Bring all the dependencies in:
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

// Port number:
const port = process.env.PORT || 8080;
const app = express();

// Connect to mLab by mongoose
// Check for success/error connection
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
    console.log('Connected to the database!!!');
});
mongoose.connection.on('error', (err)=>{
    console.log('Err! Could not connect to the database: '+err);
});

// Set the middleware for the server: 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// User need to log in to access user profile, dashboard
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Set the static folder, this folder will have all
// of the Angular front end in it.
app.use(express.static(path.join(__dirname+'public')));

// These will be the api/routes for this web app:
app.use('/', userRoutes);
app.use('/user', contactRoutes);


// For all other routes, send the user back to home:
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Create a backend server on port 8080
http.createServer(app).listen(port, ()=>{
    console.log('The magical backend server is running on port: '+port);
});
