# Create the register template and set up the needed functions:
## 1. Create the template for register with the form control:
### (*Note: add import { FormsModule } from '@angular/forms'; to app.module.ts to use the forms)
Basic form with two-way data binding, routerLink(faster link without reload the page)
The *ngIf="!authService.isLoggedIn() is the 
```
<div class="container" *ngIf="!authService.isLoggedIn()">
    <h2 class="page-header">Register</h2>
    <form class="form-signin">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" placeholder="*Enter Name" [(ngModel)]="name" name="name">
        </div>
        ...
        <button class="btn btn-success" (click)="onRegisterSubmit()">Register</button>&nbsp;
        <button class="btn btn-danger" (click)="onCancelSubmit()">Cancel</button><br><br>
        <p>Already have an account? <a [routerLink] = "['/']">Login Here</a></p> 
    </form>
</div>
```
## 2. Set up Validation, Auth Service, Clear the forms:
Bring in all the services and routes:
```
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';

constructor(private router: Router,
            private validateService : ValidateService,
            public authService: AuthService) { }
```
Declare variables for the data coming in from the register form
```
  name: String;
  email: String;
  username: String;
  password: String;
```
Cancel button function:
```
onCancelSubmit(){
    this.username = undefined;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
  }
```
Submit button function:
```
  onRegisterSubmit(){
    
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    
    if(!this.validateService.validateRegister(user)){
      alert('Please fill in all fields');
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      alert('Please use a valid email');
      return false;
    }

    this.authService.registerUser(user).subscribe(
      data =>{
        // this.showSuccess('You are registered and now can log in.');
        alert('You are registered and now can log in');
        this.router.navigate(['/']);
    }, error => {
        alert('Something went wrong, please try again');
       // this.showError();
        this.router.navigate(['/register']);
    });

  }
```
Finished! Success! :)