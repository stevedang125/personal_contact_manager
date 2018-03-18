import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import array:
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';


import { FilterPipe } from './services/filter.pipe';

const appRoutes: Routes =[
  { path:'', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path:'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
