import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from './todo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  appUrl = environment.appUrl; // Server URL

  constructor(private http: HttpClient) { }

  getAll() {
    const params = new HttpParams()
      .set('_sort', 'id')
      .set('_order', 'desc');

    return this.http.get<Todo[]>(this.appUrl , { params });
  }

  create(todo: Todo) {
    return this.http.post<Todo>(this.appUrl, todo);
  }

  remove(id: number) {
    return this.http.delete(`${this.appUrl}/${id}`);
  }

  toggle(id: number, completed: boolean) {
    return this.http.patch<Todo>(`${this.appUrl}/${id}`, { completed });
  }
}
