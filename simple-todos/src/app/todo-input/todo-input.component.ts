import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
  <input type="text" placeholder="내용을 입력하세요" 
  (keyup.enter)="addTodo()"
  [(ngModel)]="content">
  `,
  styles: []
})
export class TodoInputComponent {
  content: string;

  @Output() add = new EventEmitter;

  addTodo() {
    this.add.emit(this.content);
    this.content = '';
  }
}
