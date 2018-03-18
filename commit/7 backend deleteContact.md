# Delete a contact in the database, send back the contact deleted if success, test with POSTMAN
## 1. In routes/contacts.js:
Make a DELETE request to the database to find the contact and delete it:
```
router.delete('/dashboard/delete_contact/:id', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    Contact.findOneAndRemove({_id: req.params.id}, (err, contact)=>{
        if(err){
            res.status(500).json({errmsg: 'Failed to delete contact!'});
        }
        res.status(200).json({msg: contact});
    });
    // res.send('This is a http DELETE dashboard delete contact request.');
    // res.json({user: req.user});
});
```
## 2. Test it via POSTMAN:
Make a DELETE request to:(with the id in the api route)
localhost:8080/user/dashboard/delete_contact/5aadd840d0f54c46f4ddcd80 
**** Don't forget to include the parameter id "user/dashboard/delete_contact/id"
```
Header:
Authorization   JWT token
Content-Type    application/json
Body:(raw)
{
    "_id":"5aadd840d0f54c46f4ddcd80", 
	"firstName":"harry_harry",
	"lastName":"potter-potter",
	"preferredName":"hairy_hairy",
	"address": "123 address",
    "email": "email@home.com",
    "homePhone": "9898989898",
    "cellPhone": "8989898989",
    "user_id": "random98"
}
```
Then:
```
{
    "msg": {
        "_id": "5aadd840d0f54c46f4ddcd80",
        "firstName": "harryyyyyyyyyyyyyyyyyyyyy9",
        "lastName": "potterrrrrrrrrrrrrrrrrrrrrrrrrr9",
        "preferredName": "super_hairy",
        "address": "123 address",
        "email": "email@home.com",
        "homePhone": "9898989898",
        "cellPhone": "8989898989",
        "user_id": "random98",
        "__v": 0
    }
}
```
Finished! Success! :)