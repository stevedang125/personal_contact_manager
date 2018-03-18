import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';

@Injectable()
export class AuthService {

  // Declare variables:
  authToken: any; // token holder
  user: any;      // user object holder
  loggedIn:any;   // logged in True/False 

  private baseUri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // ======= Helper functions ===============

  // Load the saved token from local storage into authToken val,
  // when a user logged in and came back to the website
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Store the generated token and user object into the local storage
  storeUserToken(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Set the logged in to true
  setLoggedIn(){
    this.loggedIn = true;
  }

  // Check if the user has logged in before and has a save token
  isLoggedIn(){
    this.loadToken();
    (this.authToken) ? this.setLoggedIn() : this.loggedIn = false;
    return this.loggedIn;
  }

  logout(){
    this.loggedIn = false;
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // ======= Http request functions =========

  // POST: register
  registerUser(user){
    return this.http.post(this.baseUri+'/register', user, {headers:this.headers});
  }

  // POST: login
  loginUser(user){
    return this.http.post(this.baseUri+'/login', user, {headers:this.headers});
  }

  

  // GET: user profile
  userProfile(){
    // Load the token into the authToken const:
    this.loadToken();
    this.headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get(this.baseUri+'/user/profile', {headers:this.headers});
  }

  // GET: user dashboard
  userDashboard(){
    // Load the token into the authToken const:
    this.loadToken();
    this.headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get(this.baseUri+'/user/dashboard', {headers:this.headers});
  }

  // ========== Http Add, Update, Delete request functions =====

  addContact(contact: Contact){
    return this.http.post(this.baseUri+'/user/dashboard/add_contact', contact, {headers:this.headers});
  }

  updateContact(contact: Contact){
    return this.http.put(this.baseUri+'/user/dashboard/update_contact', contact, {headers:this.headers});
  }

  deleteContact(contact: Contact){
    const id = contact._id;
    return this.http.delete(this.baseUri+'/user/dashboard/delete_contact/'+id, {headers:this.headers});
  }

}
