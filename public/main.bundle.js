webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body>\n  <div class=\"bg\">\n      <router-outlet></router-outlet>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_filter_pipe__ = __webpack_require__("./src/app/services/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import array:















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/dashboard', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user/profile', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__services_filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    border: 1px;\r\n    padding: 0px, 0px, 0px, 0px;\r\n}\r\n\r\n.menu{\r\n    width: 25%;\r\n    float: left;\r\n    border: 1px solid red;\r\n    height: 100%;\r\n}\r\n\r\n.searchMenu{\r\n    float: left;\r\n    width: 100%;\r\n    border: 1px solid green;\r\n    height: 25%;\r\n\r\n}\r\n\r\n.addMenu{\r\n    float: left;\r\n    width: 100%;\r\n    border: 1px solid green;\r\n    height: 75%;\r\n}\r\n\r\n.main{\r\n    width: 75%;\r\n    float: left;\r\n    border: 1px solid red;\r\n    height: 100%;\r\n}\r\n\r\n.half{\r\n    width: 100%;\r\n}\r\n\r\n.column {\r\n    float: left;\r\n    /* padding: 0px, 50px, 0px, 50px; */\r\n    height: 550px;\r\n}\r\n\r\n.zoom {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\r\n }\r\n\r\n/* col-sm-9{\r\n    max-height: 550px;\r\n    overflow: auto;\r\n} */\r\n\r\n.left_column {\r\n    width: 25%;\r\n    height: 550px;\r\n}\r\n\r\n.right_column {\r\n    width: 75%;\r\n    height: 550px;\r\n}\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n/* .auto_div{\r\n    height: 550px;\r\n    position: center;\r\n    size: cover;\r\n} */\r\n\r\n.scrolling {\r\n    overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"bg zoom\">\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <!-- Search -->\n      <!-- <div class=\"card\"> -->\n          <form>\n              <!-- <div class=\"card-body\"> -->\n                <!-- <h6 class=\"card-title\"> -->\n                <h6>\n                  <strong>Search</strong>\n                </h6>\n                \n                <table class=\"table table-hover\">\n                  <tbody>\n                    <tr>\n                      <td>\n                        <div class=\"form-group\">\n                            <input placeholder=\"*Enter Name\" type=\"text\" name=\"inputString\" [(ngModel)] = \"inputString\" class=\"form-control\">\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <button class=\"btn btn-success\" (click)=\"search_contact()\">Search</button>&nbsp;\n                      <button class=\"btn btn-danger\" (click)=\"clearSearch()\">Clear</button>\n                    </tr>\n                  </tbody>\n                </table>\n              <!-- </div> -->\n            </form>\n        <!-- </div> -->\n      <!-- End Search -->\n\n      <!-- Add -->\n      <form>\n          <!-- <div class=\"card-body half\"> -->\n            <!-- <h4 class=\"card-title\"><strong>Add Contact</strong></h4> -->\n            <h6><strong>Add Contact</strong></h6>\n            <table class=\"table table-hover\">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class=\"form-group\">\n                      <!-- <label><h6><strong>Firstname:</strong></h6></label> -->\n                      <input placeholder=\"*Enter Firstname\" type=\"text\" name=\"firstName\" [(ngModel)] = \"firstName\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- <label><h6><strong>Lastname:</strong></h6></label> -->\n                        <input placeholder=\"*Enter Lastname\" type=\"text\" name=\"lastName\" [(ngModel)] = \"lastName\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- <label><h6><strong>Preferred Name:</strong></h6></label> -->\n                        <input placeholder=\"*Enter Preferred Name\" type=\"text\" name=\"preferredName\" [(ngModel)] = \"preferredName\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- <label><h6><strong>Address:</strong></h6></label> -->\n                        <input placeholder=\"*Enter Address\" type=\"text\" name=\"address\" [(ngModel)] = \"address\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- <label><h6><strong>Email:</strong></h6></label> -->\n                        <input placeholder=\"*Enter Email\" type=\"text\" name=\"email\" [(ngModel)] = \"email\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- <label><h6><strong>Home Phone:</strong></h6></label> -->\n                        <input placeholder=\"*Enter Home Phone\" type=\"text\" name=\"homePhone\" [(ngModel)] = \"homePhone\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- <label><h6><strong>Cell Phone:</strong></h6></label> -->\n                        <input placeholder=\"*Enter Cell Phone\" type=\"text\" name=\"cellPhone\" [(ngModel)] = \"cellPhone\" class=\"form-control\">\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                      <!-- <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\"> -->\n                      <button class=\"btn btn-success\" (click)=\"onSubmitButton()\">Submit</button>&nbsp;\n                      <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          <!-- </div> -->\n        </form>\n      <!-- End add -->\n    </div>\n\n\n    <div class=\"col-md-10\">\n      <!-- Contact list -->\n      <!-- Contact list -->\n  <!-- <div class=\"card\"> -->\n      <!-- <div class=\"card-body\"> -->\n        <!-- <h4 class=\"card-title\"><strong>Contact List</strong></h4> -->\n        <h6><strong>Contact List</strong></h6>\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th><h6><strong>Number</strong></h6></th>\n              <th><h6><strong>Firstname</strong></h6></th>\n              <th><h6><strong>Lastname</strong></h6></th>\n              <th><h6><strong>Preferred Name</strong></h6></th>\n              <th><h6><strong>Address</strong></h6></th>\n              <th><h6><strong>Email</strong></h6></th>\n              <th><h6><strong>Home Phone</strong></h6></th>\n              <th><h6><strong>Cell Phone</strong></h6></th>\n              <th><h6><strong>Options</strong></h6></th>\n            </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let contact of hack(contactlist) | filter:inputString; let i = index\">\n                <td>{{i+1}}</td>\n                <td>{{contact.firstName}}</td>\n                <td>{{contact.lastName}}</td>\n                <td>{{contact.preferredName}}</td>\n                <td>{{contact.address}}</td>\n                <td>{{contact.email}}</td>\n                <td>{{contact.homePhone}}</td>\n                <td>{{contact.cellPhone}}</td>\n                <td>\n                    <button class=\"btn btn-danger\" (click)=\"onDeleteButton(contact)\">Delete</button>&nbsp;\n                    <button class=\"btn btn-info\" (click)=\"onEditButton(contact)\" >Edit</button>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      <!-- </div> -->\n\n      <!-- End of contact list -->\n    </div>\n  </div>\n</div>\n\n</body>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, toastr, vcr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        // Initialize theses for adding a new contact
        this._id = null;
        this.toastr.setRootViewContainerRef(vcr);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getDashboard();
    };
    // ========= Helper functions ============================
    DashboardComponent.prototype.clear = function () {
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
    };
    DashboardComponent.prototype.clearSearch = function () {
        this.inputString = undefined;
        // alert('Cleared Search!');
    };
    DashboardComponent.prototype.hack = function (val) {
        console.log("hack: " + val);
        return val;
    };
    // ========= Fetch the contact list ======================
    // Get the user data from the database:
    DashboardComponent.prototype.getDashboard = function () {
        var _this = this;
        this.authService.userDashboard().subscribe(function (dashboard) {
            _this.user = dashboard['user'];
            _this.userID = dashboard['user']._id;
            _this.contactlist = dashboard['contactlist'];
            // alert('Success! Dashboard!'+this.user+","+this.userID+","+this.contactlist);
        }, function (err) {
            console.log('Failed to get the dashboard! err: ' + err);
            _this.router.navigate(['/']);
            return false;
        });
    };
    // ============= Add, Search, Edit, Delete =================
    DashboardComponent.prototype.onSubmitButton = function () {
        var new_contact = {
            _id: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            preferredName: this.preferredName,
            address: this.address,
            email: this.email,
            homePhone: this.homePhone,
            cellPhone: this.cellPhone,
            user_id: this.userID
        };
        if (new_contact._id == null) {
            this.add_contact(new_contact);
        }
        else {
            if (new_contact._id != null) {
                this.edit_contact(new_contact);
            }
        }
    };
    DashboardComponent.prototype.onEditButton = function (contact) {
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
    };
    DashboardComponent.prototype.add_contact = function (newContact) {
        this.authService.addContact(newContact).subscribe(function (data) {
            // alert('Contact added!');
        }, function (err) {
            alert('Failed to add a contact!' + err);
        });
        this.clear();
        // Double powerful fetch, there won't be a hit and miss!! 
        this.getDashboard();
        this.getDashboard();
    };
    DashboardComponent.prototype.edit_contact = function (existing_contact) {
        this.authService.updateContact(existing_contact).subscribe(function (data) {
            // alert('Updated Contact!');
        }, function (err) {
            alert('Failed to update a contact!' + err);
        });
        this.clear();
        // Feel the power of the twin!! 
        this.getDashboard();
        this.getDashboard();
    };
    DashboardComponent.prototype.search_contact = function () {
        if (this.inputString == undefined) {
            // alert('Empty search!');
            return false;
        }
    };
    DashboardComponent.prototype.onDeleteButton = function (contact) {
        var _this = this;
        this.authService.deleteContact(contact).subscribe(function (data) {
            _this.contactlist.splice(_this.contactlist.indexOf(contact), 1);
            // alert('Deleted a contact');
        }, function (err) {
            alert('Failed to delete a contact!' + err);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".column {\r\n    float: left;\r\n    padding: 0px;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n}\r\n\r\n.loginRight {\r\n    width: 75%;\r\n    padding: 0px 0px 0px 500px;\r\n}\r\n\r\n.jumbotron{\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n\n<div class=\"container\">\n<div class=\"jumbotron center\">\n  <h1>Personal Contact Manager</h1>\n  <p class=\"lead\">\n    Welcome to the daily goals MEAN stack web app by <strong>Steve Dang</strong>\n  </p>\n</div>\n\n<div class=\"row\">\n\n<div class=\"column loginRight\" *ngIf=\"!authService.isLoggedIn()\">\n  <h2 class=\"page-header\">Login</h2>\n  <form class=\"form-signin\">\n          <div class=\"form-group\">\n            <label for=\"Username\">Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n          </div>\n          <div class=\"form-group\">\n          <label for=\"Password\">Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" value=\"remember-me\"> Remember me\n            </label>\n          </div>\n          <!-- <input class=\"btn btn-lg btn-success\" type=\"submit\" value=\"Login\"><br><br> -->\n          <button class=\"btn btn-success\" (click)=\"onLoginSubmit()\">Login</button>&nbsp;\n          <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\n          <p>Don't have an account yet? <a [routerLink] = \"['/register']\">Register Here</a></p> \n  </form>\n</div>\n\n</div>\n\n</div>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // ======= Login and Cancel functions ============
    HomeComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            alert('Please fill in all fields!');
            return false;
        }
        this.authService.loginUser(user).subscribe(function (data) {
            var success = data['success'];
            if (success) {
                var token = data['token'];
                var userObject = data['user'];
                _this.authService.storeUserToken(token, userObject);
                alert('You have logged in!');
                _this.authService.setLoggedIn();
                _this.router.navigate(['/user/profile']);
            }
            if (!success) {
                alert(data['msg']);
                _this.router.navigate(['/']);
            }
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
            _this.router.navigate(['/']);
        });
    };
    HomeComponent.prototype.onCancelSubmit = function () {
        this.username = undefined;
        this.password = undefined;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Personal Contact Manager</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto navbar-left\">\n\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/']\">Home</a>\n      </li>\n      \n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/about']\">About</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav navbar-right\">\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\"\n      *ngIf=\"authService.isLoggedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/user/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\n      </li>\n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\"\n      *ngIf=\"authService.isLoggedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/user/profile']\">Profile</a>\n      </li>\n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions] =\"{exact:true}\"\n      *ngIf=\"!authService.isLoggedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      &nbsp;&nbsp;\n      <li class=\"nav-item active\"\n      *ngIf=\"authService.isLoggedIn()\">\n        <a class=\"nav-link btn\" [routerLink]=\"['/']\" (click)=\"onLogoutClick()\">Log out</a>\n      </li>\n      \n    </ul>\n\n  </div>\n</nav>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        alert('You have logged out!');
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    width: 80%;\r\n}\r\n\r\n.column {\r\n    float: left;\r\n    padding: 0px;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n}\r\n\r\n.profileRight {\r\n    width: 100%;\r\n    padding: 50px 0px 0px 400px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"row\">\n  <div *ngIf=\"user\" class=\"container column profileRight\">\n      <h2 class=\"page-header\" style=\"color: rgb(223, 56, 35)\" >Welcome back, {{user.name}}.</h2>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">ID: {{user._id}}</li>\n        <li class=\"list-group-item\">Username: {{user.username}}</li>\n        <li class=\"list-group-item\">Email: {{user.email}}</li>\n        <li class=\"list-group-item\">Password: {{user.password}}</li> \n      </ul>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.authService.userProfile().subscribe(function (profile) {
            console.log('Success getting the user data');
            _this.user = profile['user'];
        }, function (err) {
            console.log('Failed to get the user data');
            _this.router.navigate(['/']);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.column {\r\n    float: left;\r\n    padding: 0px;\r\n    height: 100%;\r\n    margin-top: -1px;\r\n}\r\n\r\n.registerRight {\r\n    width: 75%;\r\n    padding: 50px 0px 0px 500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <html> -->\n  <div class=\"row\">\n    <div class=\"column registerRight\">\n    <div class=\"container\">\n    \n      <div class=\"container\" *ngIf=\"!authService.isLoggedIn()\">\n        <h2 class=\"page-header\">Register</h2>\n        <!-- <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\"> -->\n            <form class=\"form-signin\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Name\" [(ngModel)]=\"name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Email\" [(ngModel)]=\"email\" name=\"email\">\n                </div>\n    \n                <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n                </div>\n    \n                <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"*Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n                </div>\n    \n                <!-- <input class=\"btn btn-lg btn-success\" type=\"submit\" value=\"Register\"><br><br>\n                <button (click)=\"onCancelSubmit()\">Cancel</button> -->\n                <button class=\"btn btn-success\" (click)=\"onRegisterSubmit()\">Register</button>&nbsp;\n                <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\n                <p>Already have an account? <a [routerLink] = \"['/']\">Login Here</a></p> \n        </form>\n      </div>\n    \n    </div>\n    \n    \n    </div>\n    </div>\n    \n    <!-- </html> -->"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, validateService, authService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // ========= Messages from Toasts ============================
    // ========= Submit and Cancel functions =====================
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            alert('Please fill in all fields');
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            alert('Please use a valid email');
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            // this.showSuccess('You are registered and now can log in.');
            alert('You are registered and now can log in');
            _this.router.navigate(['/']);
        }, function (error) {
            alert('Something went wrong, please try again');
            // this.showError();
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent.prototype.onCancelSubmit = function () {
        this.username = undefined;
        this.name = undefined;
        this.email = undefined;
        this.password = undefined;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUri = "http://localhost:8080";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    // ======= Helper functions ===============
    // Load the saved token from local storage into authToken val,
    // when a user logged in and came back to the website
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Store the generated token and user object into the local storage
    AuthService.prototype.storeUserToken = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Set the logged in to true
    AuthService.prototype.setLoggedIn = function () {
        this.loggedIn = true;
    };
    // Check if the user has logged in before and has a save token
    AuthService.prototype.isLoggedIn = function () {
        this.loadToken();
        (this.authToken) ? this.setLoggedIn() : this.loggedIn = false;
        return this.loggedIn;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // ======= Http request functions =========
    // POST: register
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.baseUri + '/register', user, { headers: this.headers });
    };
    // POST: login
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.baseUri + '/login', user, { headers: this.headers });
    };
    // GET: user profile
    AuthService.prototype.userProfile = function () {
        // Load the token into the authToken const:
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/profile', { headers: this.headers });
    };
    // GET: user dashboard
    AuthService.prototype.userDashboard = function () {
        // Load the token into the authToken const:
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/dashboard', { headers: this.headers });
    };
    // ========== Http Add, Update, Delete request functions =====
    AuthService.prototype.addContact = function (contact) {
        return this.http.post(this.baseUri + '/user/dashboard/add_contact', contact, { headers: this.headers });
    };
    AuthService.prototype.updateContact = function (contact) {
        return this.http.put(this.baseUri + '/user/dashboard/update_contact', contact, { headers: this.headers });
    };
    AuthService.prototype.deleteContact = function (contact) {
        var id = contact._id;
        return this.http.delete(this.baseUri + '/user/dashboard/delete_contact/' + id, { headers: this.headers });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (contactlist, inputString) {
        // Check if the search inputString is empty/undefined
        if (inputString === undefined) {
            return contactlist;
        }
        // If there is input string to search:
        return contactlist.filter(function (retVal) {
            return retVal.firstName.toLowerCase().includes(inputString.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map