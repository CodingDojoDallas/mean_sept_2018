import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Object[];
  user: Object;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.users = [];
    this.user = {'name': '', 'email': ''};
  }

  submitForm() {
    this.user = {'name': '', 'email': ''};
  }

  showUsers() {
    let usersObservable = this._httpService.getUsers();
    usersObservable.subscribe((data: any) => {
      this.users = data;
    });
  }
}
