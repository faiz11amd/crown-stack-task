import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {
        let a = localStorage.length;
        console.log(a, " : canactivate");
        
        // Check to see if a user has a valid token
        if (a !== 0) {
            
            // If they do, return true and allow the user to load app
            return true;
        }
        // If not, they redirect them to the home page
        this.router.navigate(['/home']);
        return false;
    }


}