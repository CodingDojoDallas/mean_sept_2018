import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log('ProductsEditComponent.ngOnInit');
    this._route.params.subscribe((prms: Params) => {
      // just an example of how to get values from the URL parameters
      console.log('ProductsEditComponent.ngOnInit.params[id]:', prms['id']);
    });
  }

}
