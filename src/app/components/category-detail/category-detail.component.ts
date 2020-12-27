import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  public subCategory: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.apiService.selectedCat, " : selected Cat");
    
    // this.subCategory = this.apiService.selectedCat;

    this.subCategory = JSON.parse(localStorage.getItem("selectedCategory"))

  }

}
