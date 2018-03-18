# Get request to the database to get the contacts for a specific user, test it via POSTMAN
## 1. Fetch the data from database:(routes/contacts.js)
Fetch the contact list from the database to the template
```
router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    const user_id = new ObjectId(req.user.id);
    const query = Contact.find({});
    query.where('user_id', user_id);

    query.exec(function(err, contactlist){
        (err) ? console.log('Error! ** Search for tasks with same owner: '+err) : res.status(200).json({user: req.user, contactlist: contactlist});
    });
    //res.send('This is a http GET dashboard request.');
    // res.json({user: req.user});
});
```
## 2. Testing time!!
Make a GET request to: localhost:8080/user/dashboard/
```
Header:
Authorization   JWT token
Content-Type    application/json
```
Result:
```
{
    "user": {
        "_id": "5aad8d3f9c616543786d7cb1",
        "name": "harrypotter",
        "email": "harry@home.com",
        "username": "hairy",
        "password": "$2a$10$6ySU.j8hZTW0A899UZ0EY.ORNaK2yUqVwvByOlFPsn9.MGIxSS45e",
        "__v": 0
    },
    "contactlist": []
}
```
Finished! Success! :)
