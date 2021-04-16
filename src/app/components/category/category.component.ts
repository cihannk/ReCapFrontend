import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  classes:string [] = ["Cars", "Rentals", "Customers", "Colors", "Brands"];
  selectedClass:string;
  constructor() { }

  ngOnInit(): void {
  }

  setClass(className:string) {
    if(className == this.selectedClass)return "list-group-item active";
    else{
      return "list-group-item";
    }
  } 

  setSelectedCategory(className:string) {
    this.selectedClass = className;
  }

}
