# Search for contact by its id in database, change the data and save it back to db, use POSTMAN to test it:
## 1. Helper function in "models/contact.js"
Update an existing contact in the database:
```
module.exports.getContactById = function(id, callback){
    Contact.findById(id, callback);
}
```
## 2. Change the data and save it to the database:
```
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
```
## 3. Test it via POSTMAN:
Make a PUT request to: localhost:8080/user/dashboard/update_contact
**** Don't forget to include the <<<<<< *_id *>>>>> in the body
```
Header:
Authorization   JWT token
Content-Type    application/json
Body:(raw)
{
    "_id":"5aadd840d0f54c46f4ddcd80", // very important to have this
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
    "success": true,
    "msg": "Contact updated!"
}
```
Finished! Success! :)