import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
  <ul>
    <li *ngFor="let todo of todos">
      <input type="checkbox" [checked]="todo.completed"
       (change)="toggle.emit(todo.id)">
      <span [class.completed]="todo.completed">{{todo.content}}</span>
      <button (click)="remove.emit(todo.id)">X</button>
    </li>
  </ul>
  <pre>{{ todos | json }}</pre>
  `,
  styles: [`
  .completed{
    text-decoration : line-through;
  }`]
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() toggle = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
