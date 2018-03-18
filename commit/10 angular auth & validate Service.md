# Create authService and validateService:
## (*NOTE: Add everything to the app.module.ts to use them or they won't work.)
## 1. Auth_Service for making the http request to the backend:
Create a services folder, then generate a service in that folder
```
$ ng g service auth
```
Bring in the Contact schema/object:(create a contact.ts file)
```
import { Contact } from './contact';
    export class Contact {
        public _id?: string;
        public firstName: string;
        public lastName: string;
        public preferredName: string;
        public address: string;
        public email: string;
        public homePhone: string;
        public cellPhone: string;
        public user_id: string;
    }
```
Bring in the http client, http headers to make the request ot the back end.
Inject it into the constructor:
```
import { HttpClient, HttpHeaders } from '@angular/common/http';
constructor(private http: HttpClient) { }
```
Set up the baseUri and the headers, create variables to hold the token
and user object
```
    // Declare variables:
    authToken: any; // token holder
    user: any;      // user object holder
    loggedIn:any;   // logged in True/False 

    private baseUri:string="http://localhost:8080";
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
```
These are functions for user to register and login, also authentications 
for the user to access a protected API route using saved token in the 
local storage:
```
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
```
## 2. Validation Service for the register and the log in forms:
Create a validation service in the "services" folder:
```
$ ng g service validate
```
Simple validation for register and log in forms to stop the user send bad data
to the back end:(eg. empty, undefined data)
```
  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateLogin(user){
    if(user.username == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
```