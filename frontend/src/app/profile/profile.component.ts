import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getProfile();
  }

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

}
