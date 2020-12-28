import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        let a = localStorage.length;
        if (a !== 0) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    }
}