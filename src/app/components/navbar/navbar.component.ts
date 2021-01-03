import { SnackbarService } from './../../shared/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public catalog: any;
  public selectedLoc: any;
  constructor(private apiService: ApiService, private router: Router, private snackbar: SnackbarService) { }

  ngOnInit(): void {
    // this.apiService.getCatalogData.subscribe((res: CatalogDataModel) => {
    //   this.catalog = res.data;
    // });

    this.catSelect();
  }

  fetchLocationApi() {
    this.apiService.getAllLocations().subscribe((res)=>{
      this.catalog = res.data;
      this.snackbar.openSnackBar("Data Fetch Successfully", "Undo");
    })
  }


  public catSelect(val?) {
    val ? localStorage.setItem("locationOrBranch", JSON.stringify(val)) : null;
    localStorage.length > 0 ? this.selectedLoc = JSON.parse(localStorage.getItem("locationOrBranch"))?.name : this.selectedLoc = "Select Location";

    if (val) {
      this.apiService.navbarEvent();
      this.router.navigate(['/category']);
    }
  }

  public logo() {
    this.selectedLoc = "Select Location";
    let keysToRemove = ["locationOrBranch", "selectedCategory"]
    for (let key of keysToRemove) {
      localStorage.removeItem(key);
    }
  }
}
