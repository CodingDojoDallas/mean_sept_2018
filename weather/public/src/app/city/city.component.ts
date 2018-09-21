import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: Object;

  constructor(private _route: ActivatedRoute, private _weatherService: WeatherService) {
    this.city = {};
  }

  ngOnInit() {
    this.city = {};
    this._route.params.subscribe((prms: Params) => {
      this._weatherService.getCity(prms['city']).subscribe((cityData) => {
        this.city = cityData['list'][0];
      });
    });
  }
}
