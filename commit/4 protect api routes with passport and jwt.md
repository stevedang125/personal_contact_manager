# Protect certains routes by passport and jwt, require a valid token to access auth routes:
## 1. Passport and jwt:
Bring in passport and jwt to protect these routes
```
const jwt = require('jsonwebtoken');
const passport = require('passport');
```
## 2. Add these to the 2nd paramater to protect these routes:
passport.authenticate('jwt', {session: false})
```
router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    console.log('This is a http GET profile request.');
    res.json({user: req.user});
});
```
## 3. Test it with POSTMAN:
GET request: localhost:8080/user/profile
```
Header: Authorization   Value: JWT token
```
Finished! Success! :)
