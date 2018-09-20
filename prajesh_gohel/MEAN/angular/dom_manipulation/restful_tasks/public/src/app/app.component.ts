import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  titles: Object[];
  desc: any;
  search: any;
  constructor (private _httpService: HttpService) {}
  ngOnInit() {
    this.titles = [];
  }
  showTaskTitles() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data: any) => {
      this.titles = data.tasks;
    });
  }
  showTaskDesc(id: any) {
    let observable = this._httpService.getOneTask(id);
    observable.subscribe((data: any) => {
      console.log(data)
      this.desc = data.task
    });
  }
}
