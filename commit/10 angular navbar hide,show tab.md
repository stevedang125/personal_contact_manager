# Hide/Show a tab when the user is logged in/logout:
## 1. Template:
To hide some tabs when a user is logged in, the authService.isLoggedIn()
method will return true(show the tab) if the user is logged in, 
otherwise false(hide the tab):
```
*ngIf="authService.isLoggedIn()"
```
## 2. Component.ts:
Bring the service and boom! ^^
```
import { AuthService } from '../services/auth.service';
```
Finished! Success! :) 