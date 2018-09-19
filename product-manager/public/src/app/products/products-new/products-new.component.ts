import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpService } from '../../http.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  newProduct: Object;
  createErrors: Object;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.resetNewProduct();
  }

  createProduct() {
    console.log('ProductsNewComponent.createProduct');
    let createObservable = this._httpService.createProducts(this.newProduct);
    createObservable.subscribe((data_from_create: any) => {
      console.log('data_from_create:', data_from_create);
      this.resetNewProduct();
      if (!data_from_create.error) {
        // Creation was successful, redirect to products page
        this._router.navigate(['products']);
      }
      else {
        // There were errors. Set the class variable this.createErrors so they
        // can be seen in the html
        this.createErrors = data_from_create.errors;
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
