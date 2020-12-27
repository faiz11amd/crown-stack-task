import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public selectedCat:any;
  public detectChangeFilter = new BehaviorSubject(null);
  
  constructor(private http: HttpClient) { }

  get getCatalogData() {
    return this.http.get("assets/catalog.json");
  }

  navbarEvent(event) {
    this.detectChangeFilter.next(event);
  }
  get getNavbarEvent() {
    return this.detectChangeFilter.asObservable();
  }
}
