import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit, OnDestroy {
  public category: any;
  private navbarSubscription: Subscription;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.navbarSubscription = this.apiService.getNavbarEvent.subscribe(() => {
        this.filterCat();
     })
    this.filterCat();
  }

  private filterCat() {
    let selectedLocOrBranch = JSON.parse(localStorage.getItem("locationOrBranch"));
    if (selectedLocOrBranch['branch_id']) {
      this.category = selectedLocOrBranch['categories'];
      this.apiService.selectedCat = this.category;
    } else if (selectedLocOrBranch['dealers_id']) {
      let branches = selectedLocOrBranch['branches'];
      let a = [];
      branches.forEach((branch, i) => {
        branch.categories.forEach((val, i) => {
          a.push(val);
        })
        this.category = a;
        this.apiService.selectedCat = this.category;
      })
    }
  }

  public subCat(val) {
    this.apiService.selectedCat = val;
    val ? localStorage.setItem("selectedCategory", JSON.stringify(val)) : null;
    val ? this.router.navigate(['/category-detail']) : null;
  }

  ngOnDestroy(){
    this.navbarSubscription.unsubscribe();
  }
}
