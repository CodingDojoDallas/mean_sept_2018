import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Object[];
  selectedProduct: Object;

  constructor(private _ProductsService: ProductsService) {
    console.log('ProductsComponent.constructor');
  }

  ngOnInit() {
    console.log('ProductsComponent.ngOnInit');

    // initialize class attributes when Angular initializes this component
    this.products = [];
    this.selectedProduct = {};

    // create observable and subscribe ($.get('/products', function(products_data) { ... })) in JQuery
    let productObservable = this._ProductsService.products();
    productObservable.subscribe(
      // this is the callback function
      (products_data: Object[]) => {
      console.log('projects_data:', products_data);
      this.products = products_data;
    });
  }

  // this method will be called when the 'Show' button is clicked
  selectProduct(product: any) {
    console.log('ProductsComponent.selectProduct.product:', product);
    this.selectedProduct = product;
  }

}
