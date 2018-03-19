import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService }  from '../services/auth.service';
import { Router, Route } from '@angular/router';
import { Contact } from '../services/contact';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Search input string:
  inputString:string;

  // user object and user ID holder 
  user: Object;
  userID: string;

  // Single contact or array contact
  contact:Contact;
  contactlist:Contact[];

  // Initialize theses for adding a new contact
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
              private router: Router,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
                this.toastr.setRootViewContainerRef(vcr);
               }

  ngOnInit() {
    this.getDashboard();
  }

  // ========= Helper functions ============================
  clear(){
    this._id = undefined;
    this.firstName = undefined;
    this.lastName = undefined;
    this.preferredName = undefined;
    this.address = undefined;
    this.email = undefined;
    this.homePhone = undefined;
    this.cellPhone = undefined;
    this.user_id = undefined;
    // alert('Cleared!');
  }

  clearSearch(){
    this.inputString = undefined;
    // alert('Cleared Search!');
  }

  hack(val){
    console.log("hack: "+val);
    return val;
  }

  // ========= Fetch the contact list ======================
  // Get the user data from the database:
  getDashboard(){
      this.authService.userDashboard().subscribe(dashboard =>{
      this.user = dashboard['user'];
      this.userID = dashboard['user']._id;
      this.contactlist = dashboard['contactlist'];
      // alert('Success! Dashboard!'+this.user+","+this.userID+","+this.contactlist);
    }, err =>{
      console.log('Failed to get the dashboard! err: '+err);
      this.router.navigate(['/']);
      return false;
    });
  }

  // ============= Add, Search, Edit, Delete =================

  onSubmitButton(){
      const new_contact = {
        _id: this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        preferredName: this.preferredName,
        address: this.address,
        email: this.email,
        homePhone: this.homePhone,
        cellPhone: this.cellPhone,
        user_id: this.userID
      }
      
      if(new_contact._id == null){
        this.add_contact(new_contact);
      }else{
        if(new_contact._id != null){
          this.edit_contact(new_contact);
        }
      }
  }

  onEditButton(contact){
    this._id = contact._id;
    this.firstName = contact.firstName;
    this.lastName = contact.lastName;
    this.preferredName = contact.preferredName;
    this.address = contact.address;
    this.email = contact.email;
    this.homePhone = contact.homePhone;
    this.cellPhone = contact.cellPhone;
    this.user_id = contact.userID;
    // alert('A contact is being updated!');
  }

  add_contact(newContact){
    this.authService.addContact(newContact).subscribe(data=>{
      // alert('Contact added!');
    }, err=>{
      alert('Failed to add a contact!'+err);
    });

    this.clear();
    // Double powerful fetch, there won't be a hit and miss!! 
    this.getDashboard();
    this.getDashboard();
  }

  edit_contact(existing_contact){
    this.authService.updateContact(existing_contact).subscribe(data =>{
      // alert('Updated Contact!');
    }, err=>{
      alert('Failed to update a contact!'+err);
    });
    this.clear();
    // Feel the power of the twin!! 
    this.getDashboard();
    this.getDashboard();
  }

  search_contact(){
    if(this.inputString == undefined){
      // alert('Empty search!');
      return false;
    }
  }

  onDeleteButton(contact){
    this.authService.deleteContact(contact).subscribe(data=>{
      this.contactlist.splice(this.contactlist.indexOf(contact),1);
      // alert('Deleted a contact');
    }, err =>{
      alert('Failed to delete a contact!'+err);
    });
  }
}
