import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public category: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.apiService.getNavbarEvent.subscribe((res)=> {
      if(res) {
    this.filterCat();
      }
    })
    this.filterCat();

  }

  filterCat() {
    let selectedLocOrBranch= JSON.parse(localStorage.getItem("locationOrBranch"));
    console.log(selectedLocOrBranch);

    if (selectedLocOrBranch['branch_id']) {
      this.category = selectedLocOrBranch['categories'];
      this.apiService.selectedCat = this.category;
    } else if (selectedLocOrBranch['dealers_id']) {
      let branches = selectedLocOrBranch['branches'];
      let a = [];
      branches.forEach((branch, i)=> {
        console.log(branch, " : branch");
        
        branch.categories.forEach((val, i)=> {
          a.push(val);
        })
        this.category = a;
      this.apiService.selectedCat = this.category;

        console.log(a, " : a");
        
      })
      
    }
  }

  subCat(val) {
    
    console.log(val, " : val in a category");
    
    this.apiService.selectedCat = val;
    val ? localStorage.setItem("selectedCategory", JSON.stringify(val)) : null;
    val ? this.router.navigate(['/category-detail']) : null;
  }

}
