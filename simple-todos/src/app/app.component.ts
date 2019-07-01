import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" placeholder="enter todo"
  (keyup.enter)="addTodo()"
  [(ngModel)]="content">
    <ul>
      <li *ngFor="let todo of todos">
      <input type="checkbox" [checked]="todo.completed"
        (change)="toggleTodo(todo.id)">
        {{todo.content}}
        <button (click)="removeTodo(todo.id)">X</button>
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content: string;

  constructor(private http: HttpClient, private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll().subscribe(todos => this.todos = todos);
  }

  addTodo() {
    const content = this.content && this.content.trim();
    this.content = '';
    if (!content) { return; }

    const payload = {
      id: this.generateId(),
      content: this.content,
      completed: false
    };
    this.todoService.create(payload).subscribe(todo => this.todos = [ todo, ...this.todos]);
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodo(id: number) {
    this.todoService.remove(id)
    .subscribe(_ => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  toggleTodo(id: number) {
    const completed = this.todos.find(todo => todo.id === id).completed;
    this.todoService.toggle(id, completed)
    .subscribe(ServerTodo => {
      this.todos = this.todos.map(todo => todo.id === id ? ServerTodo : todo);
    });
  }
}
