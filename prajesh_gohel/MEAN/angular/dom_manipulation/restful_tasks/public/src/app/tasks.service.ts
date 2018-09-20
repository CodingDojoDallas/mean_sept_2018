import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get('/tasks');
  }

  getTask(id) {
    return this._http.get('/tasks/'+id)
  }

  addTask(newTask) {
    return this._http.post('/task', newTask);
  }

  updateTask(id, task) {
    return this._http.put('/tasks/edit/'+id, task);
  }

  destroyTask(id) {
    return this._http.delete('/tasks/'+id);
  }
}
