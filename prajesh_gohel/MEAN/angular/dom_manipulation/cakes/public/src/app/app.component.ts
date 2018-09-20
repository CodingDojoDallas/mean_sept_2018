import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes: Object[];
  newCake: any;
  rating: any;

  constructor(private _cakeService: CakeService){}

  ngOnInit() {
    this.newCake = { baker_name: "", imageURL: "" };
    this.rating = { stars: "", comment: "" };
    this.getAllCakes();
  }

  getAllCakes() {
    let observable = this._cakeService.getCakes();
    observable.subscribe(data => {
      console.log("Got all cakes!", data['cakes']);
      this.cakes = data['cakes'];
    });
  }

  createCake() {
    let observable = this._cakeService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Created cake!", data);
      this.newCake = { baker_name: "", imageURL: "" };
      this.getAllCakes();
    });
  }
}
