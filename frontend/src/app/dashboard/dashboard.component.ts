import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { Contact } from '../services/contact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: Object;
  userID: string;

  contact:Contact;
  contactlist:Contact[];

  _id:string = null;
  firstName: string;
  lastName: string;
  preferredName: string;
  address: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  user_id: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getDashboard();
  }

  // Get the user data from the database:
  getDashboard(){
      this.authService.userDashboard().subscribe(dashboard =>{
      this.user = dashboard['user'];
      this.userID = dashboard['user']._id;
      this.contactlist = dashboard['contactlist'];
      alert('Success! Dashboard!'+this.user+","+this.userID+","+this.contactlist);
    }, err =>{
      console.log('Failed to get the dashboard! err: '+err);
      this.router.navigate(['/']);
      return false;
    });
  }

  hack(val){
    console.log("hack: "+val);
    return val;
  }

}
