import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {LoginComponent} from './login/login.component';
import {AdminCategoriesComponent} from './admin-categories/admin-categories.component';
import {AdminProductsComponent} from './admin-products/admin-products.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {RegisterComponent} from './register/register.component';
import {TasksComponent} from './tasks/tasks.component';
import {NewTaskComponent} from './new-task/new-task.component';


const routes: Routes = [
  {path:"products/:urlProds",component:ProduitsComponent},
  {path:"login",component:LoginComponent},
  {path:"adminCategories",component:AdminCategoriesComponent},
  {path:"adminProducts",component:AdminProductsComponent},
  {path:"adminUsers",component:AdminUsersComponent},
  {path:"register",component:RegisterComponent},
  {path:"tasks",component:TasksComponent},
  {path:"new-task",component:NewTaskComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
