import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  newProduct: Object;
  createErrors: Object[];

  constructor(private _productsService: ProductsService, private _router: Router) { }

  ngOnInit() {
    this.resetNewProduct();
    this.createErrors = [];
  }

  createProduct() {
    console.log('ProductsNewComponent.createProduct');
    let createObservable = this._productsService.createProducts(this.newProduct);
    createObservable.subscribe((data_from_create: any) => {
      console.log('data_from_create:', data_from_create);
      this.resetNewProduct();
      if (data_from_create.errors) {
        console.log('here', data_from_create.errors.errors);
        // There were errors. Set the class variable this.createErrors so they
        // can be seen in the html
        for (let err in data_from_create.errors) {
          this.createErrors.push(data_from_create.errors[err].message);
        }
      }
      else {
        // Creation was successful, redirect to products page
        this._router.navigate(['products']);
      }
    });
  }

  resetNewProduct() {
    this.newProduct = {
      name: '',
      price: 0,
      info: '',
      image_url: ''
    }
  }
}
