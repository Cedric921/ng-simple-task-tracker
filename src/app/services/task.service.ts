import { Injectable } from '@angular/core';
import { Task } from '../types/Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'http://localhost:5001/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteRoute = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(deleteRoute);
  }

  setReminder(task: Task): Observable<Task> {
    const editRoute = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(editRoute, task, httpOptions);
  }
}
