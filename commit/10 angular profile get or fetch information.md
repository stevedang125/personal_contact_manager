# Get the user information from the database with an http GET request that 
# will get fired when the user logged in:
## 1. ComponentTS for profile:
Bring in all the services and inject them into the constructor:
```
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';

constructor(private authService: AuthService,
            private router: Router) { }
```
This function will use authService http call to get the user information
from the server then send that information to the template:
```
getProfile(){
    this.authService.userProfile().subscribe(profile =>{
      console.log('Success getting the user data');
      this.user = profile['user'];
    },
      err => {
        console.log('Failed to get the user data');
        this.router.navigate(['/']);
        return false;
    });
  }
```
Put this function in 
```
ngOnInit(){
    this.getProfile();
}
```
So when the user logged in, this will load the infor to the template.

Finished! Success! :)