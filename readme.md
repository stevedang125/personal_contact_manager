# Personal Contact Manager Web App:

This project is a personal contact manager web app.
It supports:
1) Encrypted login/register for each user(bcrypt hash and salt password).
   After logged in, generate a token and save it to the local storage.
2) Contact lookup(angular pipe filter).
3) Contact edition, deletion and insertion by sending http put, delete, post request in authservice.
4) Auto update the contact list(asynchronous).

This project utilizes the MEAN stack: MongoDB(mLab), Express, Angular5, and NodeJS.

## Run the Project!
To run the project, you have to first clone it:
```
$ git clone https://github.com/stevedang125/personal_contact_manager.git
```

After cloning, make sure you have Nodejs and Angular5 installed, cd into the project directory.
```
$ cd personal_contact_manager
```

Run the project!
Intall the dependencies:
```
$ npm install
```
Then:
```
$ npm start
or 
$ node server.js
$ nodemon server.js
```
If all is successful, it should be available at your `localhost` on `port 8080` (`http://localhost:8080/`).




