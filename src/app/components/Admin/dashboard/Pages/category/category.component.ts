import { Component, OnInit } from '@angular/core';
// import { CategoryService } from '../../../../../category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  // public categories = [];
  // constructor( private categoryService: CategoryService) { }
  constructor() { }
  ngOnInit() {
    // this.categoryService.getCategories()
    //     .subscribe(data => this.categories = data);
  }

}
