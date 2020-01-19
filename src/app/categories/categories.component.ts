import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catService:CatalogueService,private routes:Router) { }
categories;
  currentCategory;

  ngOnInit() {
  this.catService.getAllcategories()
    .subscribe(data=>{
      this.categories=data
    },error => {
      console.log(error)
    })
  }

  onGetProduct(cat){
    this.currentCategory=cat;
    let url=cat._links.products.href;
this.routes.navigateByUrl("/products/"+btoa(url));

  }




}
