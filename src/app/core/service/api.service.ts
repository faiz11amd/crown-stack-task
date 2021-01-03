import { HttpService } from './http.service';
import { CatalogDataModel } from 'src/app/core/model/catalog.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public selectedCat:any;
  public detectChangeFilter = new Subject<any>();
  
  constructor(private http: HttpClient, private httpService: HttpService) { }


  public getAllLocations(): Observable<CatalogDataModel> {
    return this.httpService.get()
      .pipe(map(data => data as CatalogDataModel));
  }


  // get getCatalogData() {
  //   return this.http.get("assets/catalog.json");
  // }

  public navbarEvent() {
    this.detectChangeFilter.next();
  }

  get getNavbarEvent() {
    return this.detectChangeFilter.asObservable();
  }
}
