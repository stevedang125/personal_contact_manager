import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import array:
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';


import { FilterPipe } from './services/filter.pipe';
import { AuthService } from './services/auth.service'; 
import { ValidateService } from './services/validate.service';

const appRoutes: Routes =[
  { path:'', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path:'user/dashboard', component: DashboardComponent},
  { path: 'user/profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    AboutComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
