import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../types/todo.interface';
import { NavItem } from '../../types/navItem.type';


@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container" *ngIf="todos else loading" >
      <h1 class="title">Todos</h1>
      <div class="ver">7.0</div>
      <app-todo-form (add)="addTodo($event)"></app-todo-form>
      <app-todo-nav [navState]="navState" (clickNav)="clickNav($event)"></app-todo-nav>
      <app-todo-list [todos]="todos" [navState]="navState" (remove)="removeTodo($event)" (check)="checkTodo($event)"></app-todo-list>
      <app-todo-footer
       (checkAll)="checkAll($event)" (clearAll)="clearAll()"
       [countItems]="countItems()"
       ></app-todo-footer>
      </div>
    <ng-template #loading><app-todo-spinner></app-todo-spinner></ng-template>

  `,
  styles: [`
  .container {
    max-width: 750px;
    min-width: 450px;
    margin: 0 auto;
    padding: 15px;
  }

  .title {
    /* margin: 10px 0; */
    font-size: 4.5em;
    font-weight: 100;
    text-align: center;
    color: #23b7e5;
  }

  .ver {
    font-weight: 100;
    text-align: center;
    color: #23b7e5;
    margin-bottom: 30px;
  }
  `]
})

export class TodoContainerComponent implements OnInit, AfterViewChecked {

  todos: Todo[];
  navState: NavItem = 'All';
  editStatus = null;

  constructor(private todoService: TodoService) {  }

  ngOnInit() {
    this.getTodos();
  }

  ngAfterViewChecked() {
    this.countItems();
  }


  getTodos() {
    setTimeout(() =>
    this.todoService.get().subscribe(todos => this.todos = todos)
    , 4000);
  }

  addTodo(content: string) {
    const params = {
      id: this.generateId(),
      content,
      completed: false
     };
    this.todoService.create(params).subscribe(todos => this.todos = todos);
  }

  generateId(): number {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1 ;
  }

  clickNav(navItem: NavItem) {
    this.navState = navItem;
  }

  removeTodo(id: number) {
    this.todoService.delete(id).subscribe(todos => this.todos = todos);
  }

  clearAll() {
    this.todoService.deleteAll().subscribe(todos => this.todos = todos);
  }

  checkTodo(todo: Todo) {
    this.todoService.update(todo).subscribe(todos => this.todos = todos);
  }

  checkAll(status: boolean) {
      this.todoService.updateAll(status).subscribe(todos => this.todos = todos);
  }

  countItems() {
    if (!this.todos) { return; }
    return {
      leftItems: this.todos.filter(todo => !todo.completed).length,
      completedItems: this.todos.filter(todo => todo.completed).length
    };
  }
}
