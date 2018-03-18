# Create frontend project, generate components, create routes:
## 1. Create frontend project:
```
$ ng new frontend && cd frontend && ng serve
```
If all success, great! stop the live server, go into src/app,
to generate components:(home, navbar, register, profile, dashboard, about)
```
$ cd src/app
$ ng g component home
... and so on.
```
## 2. Create the routes:
In app.module.ts, import the routes, routermodule:
```
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes =[
  { path:'', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path:'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
```
Finished! Success! :)