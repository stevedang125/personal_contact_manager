#Fetch the contact list from database:
## 1. Component.ts:
Bring in the services for http request, Contact object/schema:
``` 
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { Contact } from '../services/contact';

  constructor(private authService: AuthService,
              private router: Router) { }
```
Declare variables to hold data:
```
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
```
Get the user data from the database and call it from ngOnInit():
```
    ngOnInit() {
        this.getDashboard();
    }
    getDashboard(){
        this.authService.userDashboard().subscribe(dashboard =>{
        this.user = dashboard['user'];
        this.userID = dashboard['user']._id;
        this.contactlist = dashboard['contactlist'];
        }, err =>{
        console.log('Failed to get the dashboard! err: '+err);
        this.router.navigate(['/']);
        return false;
        });
    }
```
## 2. Template:
Create a simple table to display the contact list:
```
  <div class="card">
    <div class="card-body">
      <h4 class="card-title"><strong>Contact List</strong></h4>
      <table class="table table-hover">
        <thead>
          <tr>
            <th><h6><strong>Number</strong></h6></th>
            <th><h6><strong>Firstname</strong></h6></th>
            <th><h6><strong>Lastname</strong></h6></th>
            <th><h6><strong>Preferred Name</strong></h6></th>
            <th><h6><strong>Address</strong></h6></th>
            <th><h6><strong>Email</strong></h6></th>
            <th><h6><strong>Home Phone</strong></h6></th>
            <th><h6><strong>Cell Phone</strong></h6></th>
          </tr>
        </thead>
        <tbody>
            <tr *ngFor="let contact of hack(contactlist); let i = index">
              <td>{{i+1}}</td>
              <td>{{contact.firstName}}</td>
              <td>{{contact.lastName}}</td>
              <td>{{contact.preferredName}}</td>
              <td>{{contact.address}}</td>
              <td>{{contact.email}}</td>
              <td>{{contact.homePhone}}</td>
              <td>{{contact.cellPhone}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
```
Finished! Success! :)