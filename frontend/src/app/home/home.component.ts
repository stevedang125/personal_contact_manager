import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: any;
  username:String;
  password:String;



  constructor(private validateService: ValidateService,
              public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }


  // ======= Login and Cancel functions ============
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


}
