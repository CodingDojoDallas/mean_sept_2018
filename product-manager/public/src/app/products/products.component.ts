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
    this.selectedProduct = {name: '', price: '', info: '', url: ''};

    // create observable and subscribe ($.get('/products', function(products_data) { ... })) in JQuery
    this._ProductsService.products().subscribe(
      // this is the callback function
      (products_data: Object[]) => {
        console.log('projects_data:', products_data);
        this.products = products_data['products'];
    });
  }

  // this method will be called when the 'Show' button is clicked
  selectProduct(product: any) {
    console.log('ProductsComponent.selectProduct.product:', product);
    console.log('ProductsComponent.selectProduct.this.selectedProduct:', this.selectedProduct);
    if (product._id == this.selectedProduct['_id']) {
      this.selectedProduct = {};
    }
    else {
      this.selectedProduct = product;
    }
  }

}
