import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  public subCategory: any;

  constructor() { }

  ngOnInit(): void {
    this.subCategory = JSON.parse(localStorage.getItem("selectedCategory"))
  }
}
