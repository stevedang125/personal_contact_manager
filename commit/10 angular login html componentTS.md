# Create the register template and set up the needed functions:
## Very similar to the register template and component ts:
## 1. Template:
```
<div class="column loginRight" *ngIf="!authService.isLoggedIn()">
    <h2 class="page-header">Login</h2>
    <form class="form-signin">
          <div class="form-group">
            <label for="Username">Username</label>
            <input type="text" class="form-control" placeholder="Enter Username" [(ngModel)]="username" name="username">
          </div>
          <button class="btn btn-success" (click)="onLoginSubmit()">Login</button>&nbsp;
          <button class="btn btn-danger" (click)="onCancelSubmit()">Cancel</button><br><br>
          <p>Don't have an account yet? <a [routerLink] = "['/register']">Register Here</a></p> 
    </form>
</div>
```
## 2. Component.ts! 
Bring in all the validation, auth services, router and 
inject them into the constructor:
```
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, Route } from '@angular/router';

constructor(private validateService: ValidateService,
            public authService: AuthService,
            private router: Router) { }
```
Log in button and Cancel button:
```
  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    };

    if(!this.validateService.validateLogin(user)){
      alert('Please fill in all fields!');
      return false;
    }

    this.authService.loginUser(user).subscribe(data =>{
      var success = data['success'];
      if(success){
        const token = data['token'];
        const userObject = data['user'];
        this.authService.storeUserToken(token, userObject);
        alert('You have logged in!');
        this.authService.setLoggedIn();
        this.router.navigate(['/user/profile']);
      }
      if(!success){
        alert(data['msg']);
        this.router.navigate(['/']);
      }

    }, err =>{
      alert('Oh no! Something went wrong. Please try again!');
      this.router.navigate(['/']);
    })

  }

  onCancelSubmit(){
    this.username = undefined;
    this.password = undefined;
  }

```
Finished! Success! :)