import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue/catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
categories;
mode='list';
  constructor(private CatalogueService:CatalogueService) { }

  ngOnInit() {
    this.onGetAllCategories();
  }

  onGetAllCategories()
  {
    this.CatalogueService.getAllcategories()
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      });
  }

  onDeleteCat(cat) {
    let c=confirm("Êtes-vous sûre ?");
    if(!c) return;
    this.CatalogueService.deleteRessource(cat._links.self.href)
      .subscribe(data=>{
        this.onGetAllCategories();
      },error => {
        console.log(error);
      });
  }

  onNewCat() {
    this.mode='new-cat';

  }

  onSaveCat(data) {
    let url=this.CatalogueService.host+"/categories";
this.CatalogueService.postRessource(url,data)
  .subscribe(data=>{
    this.mode='list';
    this.onGetAllCategories();
  },error => {
    console.log(error);
  });
  }
  currentCategorie;
  onEditCat(cat) {
    this.CatalogueService.getRessource(cat._links.self.href)
      .subscribe(data=>{
        this.currentCategorie=data;
        this.mode='edit-cat';
      },error => {
        console.log(error);
      });
  }


  onUpdateCat(data) {
    let url=this.CatalogueService.host+"/categories";
    this.CatalogueService.putRessource(this.currentCategorie._links.self.href,data)
      .subscribe(data=>{
        this.mode='list';
        this.onGetAllCategories();
      },error => {
        console.log(error);
      });
  }

}
