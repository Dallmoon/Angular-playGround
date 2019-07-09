import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Todo } from '../../shared/types/todo.interface';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class TodoService {

  serverUrl: string = environment.serverUrl;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Todo[]>(this.serverUrl);
  }

  create(todo: Todo) {
    return this.http.post<Todo[]>(this.serverUrl,  todo );
  }

  delete(id: number) {
    return this.http.delete<Todo[]>(this.serverUrl + id);
    // 문자열 연결 연산
  }

  deleteAll() {
    return this.http.delete<Todo[]>(this.serverUrl + 'completed');
  }

  update(todo: Todo) {
    return this.http.patch<Todo[]>(this.serverUrl + todo.id , { completed: !todo.completed });
  }

  updateAll(status: boolean) {
    return this.http.patch<Todo[]>(this.serverUrl, { completed: status });
  }
}
