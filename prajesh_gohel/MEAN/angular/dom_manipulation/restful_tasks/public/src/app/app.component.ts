import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  task: Object;
  newTask: any;
  constructor(private _httpService: TasksService){}

  ngOnInit() {
    this.newTask = { title: "", description: "", completed: false }
    this.getTasksFromService();
  }

  getTasksFromService() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got the data:", data);
      this.tasks = data["tasks"];
    });
  }

  createTask() {
    // console.log(this.newTask)
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Created new task:", data);
      this.newTask = { title: "", description: "", completed: false }
      this.getTasksFromService();
    });
  }

  getOneTask(id) {
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Got one task:", data);
      this.task = data['task'];
    });
  }

  editTask(id) {
    let observable = this._httpService.updateTask(id, this.task);
    observable.subscribe(data => {
      console.log("Updated task:", data);
      this.task = null;
      this.getTasksFromService();
    });
  }

  deleteTask(id) {
    let observable = this._httpService.destroyTask(id);
    observable.subscribe(data => {
      console.log("Deleted task");
      this.getTasksFromService();
    });
  }
}
