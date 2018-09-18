import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getTasks() {
    // our http response is an observable, store it in the variable tempObservable
    return this._http.get('/tasks');
  }
  getOneTask() {
    let tempObservable = this._http.get('/tasks/5b9c2f78596ede775d98445d');
    tempObservable.subscribe(data => console.log("Got one task", data));
  }
}
