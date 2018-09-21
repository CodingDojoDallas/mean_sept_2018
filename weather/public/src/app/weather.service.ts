import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  APPID: String;

  constructor(private _http: HttpClient) {
   this.APPID = '27c8e949b9892053c5494e7f253ff16e';
 }

  getCity(city: String){
    return this._http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&&units=imperial&APPID=${this.APPID}`);
  }
}
