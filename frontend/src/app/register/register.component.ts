import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  email: String;
  username: String;
  password: String;

  constructor(private router: Router,
              private validateService : ValidateService,
              public authService: AuthService) { }

  ngOnInit() {
  }

  // ========= Messages from Toasts ============================

  // ========= Submit and Cancel functions =====================
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

  onCancelSubmit(){
    this.username = undefined;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
  }

}
