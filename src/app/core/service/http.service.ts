import { SnackbarService } from './../../shared/snackbar/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private baseUrl = 'assets/catalog.json';
    AUTH_TOKEN = 'auth_token';

    constructor(private http: HttpClient, private snackbar: SnackbarService) {
    }

    get(url?: string, params?: any): Observable<any> {
        const data = { params, headers: this.getAuthHeader() };
        return this.http
            .get(this.baseUrl, data).pipe(catchError(this.errorHandler.bind(this)));
    }

    private errorHandler(response: any) {
        const error = response.error;
        const keys = Object.keys(error);
        const key = keys[0];
        let message = error[key];
        if (response.status === 401) {
            // auth token delete
            // redirect login page
            this.snackbar.openSnackBar("Unauthorised User", "Undo")
        }
        if (error[key] instanceof Array) {
            message = error[key][0];
        }
        if (key === 'isTrusted') {
            // this will occur when not connected to internet
            this.snackbar.openSnackBar("Please check your internet connection!!!", "Undo")
        } else {
            message = key + ' : ' + message;
        }
        // call snackbar and show error with message
        return throwError({ messages: message, error });
    }

    private getAuthHeader(): { [header: string]: string | string[]; } {
        return {
            Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`
        };
    }
}
