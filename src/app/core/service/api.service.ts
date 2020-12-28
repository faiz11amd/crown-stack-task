import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public selectedCat:any;
  public detectChangeFilter = new Subject<any>();
  
  constructor(private http: HttpClient) { }

  get getCatalogData() {
    return this.http.get("assets/catalog.json");
  }

  public navbarEvent() {
    this.detectChangeFilter.next();
  }

  get getNavbarEvent() {
    return this.detectChangeFilter.asObservable();
  }
}
