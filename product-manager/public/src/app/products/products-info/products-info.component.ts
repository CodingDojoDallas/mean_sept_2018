import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css']
})
export class ProductsInfoComponent implements OnInit {
  @Input() productToShow: any; // from parent (products.component)

  constructor() { }

  ngOnInit() {
  }

}
