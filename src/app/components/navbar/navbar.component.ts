import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public catalog: any;
  public selectedLoc: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getCatalogData.subscribe((res)=> {
      console.log(res['data']);
      this.catalog = res['data']
    });
    this.catSelect();
  }

  catSelect(val?) {
    console.log(val, " : val");
    val ? localStorage.setItem("locationOrBranch", JSON.stringify(val)) : null;

    localStorage.length>0 ? this.selectedLoc = JSON.parse(localStorage.getItem("locationOrBranch"))?.name : this.selectedLoc = "Select Location";

    if (val) {
         
    this.apiService.navbarEvent(val);
    this.router.navigate(['/category']);
    }

  }

  logo() {
    this.selectedLoc = "Select Location";
    let keysToRemove = ["locationOrBranch","selectedCategory"]
    for (let key of keysToRemove){
      localStorage.removeItem(key);
    }
  }

}
