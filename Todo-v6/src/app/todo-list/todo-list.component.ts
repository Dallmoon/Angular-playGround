import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';
import { NavItem } from '../navItem.type';

@Component({
  selector: 'app-todo-list',
  template: `
  <ul class="todos" *ngIf="todos; else loading">
    <li *ngFor="let todo of todos | filterTodo: navState;" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}"
      [checked]="todo.completed"
      (change)="checkTodo(todo)">
      <label for="ck-{{todo.id}}">{{todo.content}}</label>
      <i class="remove-todo far fa-times-circle"
      (click)="removeTodo(todo.id)"></i>
    </li>
  </ul>
  <ng-template #loading>loading...</ng-template>
  `,
  styles: [`
  .todo-item {
    position: relative;
    /* display: block; */
    height: 50px;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-color: #e7ecee;
    list-style: none;
  }

  .todo-item:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .todo-item:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  /*
    .custom-checkbox
    custom-checkbox 바로 뒤에 위치한 label의 before와 after를 사용해
    custom-checkbox의 외부 박스와 내부 박스를 생성한다.

    <input class="custom-checkbox" type="checkbox" id="myId">
    <label for="myId">Content</label>
  */
  /* .remove-todo button */
  .remove-todo {
    display: none;
    position: absolute;
    top: 50%;
    right: 10px;
    cursor: pointer;
    transform: translate3d(0, -50%, 0);
  }

  /* todo-item이 호버 상태이면 삭제 버튼을 활성화 */
  .todo-item:hover > .remove-todo {
    display: block;
  }`]
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() navState: NavItem;
  @Output() remove = new EventEmitter<number>();
  @Output() check = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(id: number): void {
    this.remove.emit(id);
  }

  checkTodo(todo: Todo): void {
    this.check.emit(todo);
    // 다른 처리와 달리 todo 객체 자체를 넘겨줌. 인수가 하나만 필요함.
  }
}
