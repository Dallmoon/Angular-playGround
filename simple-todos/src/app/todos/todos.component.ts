import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo-input (add)="addTodo($event)"></app-todo-input>
    <app-todo-list [todos]="todos"
    (toggle)="toggleTodo($event)"
    (remove)="removeTodo($event)"
    ></app-todo-list>
    `,
  styles: [``]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 3, content: 'Javascript', completed: false}
  ];

  constructor() {

  }

  ngOnInit() {

  }

  addTodo(content: string): void {
    this.todos = [{ id: this.generateId(), content, completed: false }, ...this.todos];
    // trim 처리도 해줘야 함.
  }

  generateId(): number {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1 ;
  }

  toggleTodo(id: number): void {
    // this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
