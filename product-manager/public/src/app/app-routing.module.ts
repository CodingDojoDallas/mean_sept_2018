import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './products/products.component'
import { ProductsEditComponent } from './products/products-edit/products-edit.component'
import { ProductsNewComponent } from './products/products-new/products-new.component'

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    // nested route
    { path: 'edit/:id', component: ProductsEditComponent },
  ]},
  { path: 'products/new', component: ProductsNewComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
