import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo } from '../todo.interface';
import { NavItem } from '../navItem.type';

@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container"  *ngIf="todos else loading" >
    <h1 class="title">Todos</h1>
    <div class="ver">5.0</div>
    <app-todo-form (add)="addTodo($event)"></app-todo-form>
    <app-todo-nav [navState]="navState" (clickNav)="clickNav($event)"></app-todo-nav>
    <app-todo-list [todos]="todos" [navState]="navState" (remove)="removeTodo($event)" (check)="checkTodo($event)"></app-todo-list>
    <app-todo-footer
     (checkAll)="checkAll($event)" (clearAll)="clearAll()"
     [countItems]="{ leftItems: leftItems, completedItems: completedItems }"
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
export class TodoContainerComponent implements OnInit, DoCheck {

  todos: Todo[];
  navState: NavItem = 'All';
  leftItems: number;
  completedItems: number;


  constructor() {
    this.getTodos();
   }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.countItems();
  }


  getTodos(): void {
    setTimeout(() => this.todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ], 4000);
  }

  addTodo(content: string): void {
    this.todos = [{ id: this.generateId(), content, completed: false}, ...this.todos];
  }

  generateId(): number {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1 ;
  }

  clickNav(navItem: NavItem): void {
    this.navState = navItem;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => id !== todo.id);
  }

  checkTodo(id: number): void {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  }

  checkAll(status: boolean): void {
    if (status) {
      this.todos = this.todos.map(todo => ({...todo, completed: true}));
    } else {
      this.todos = this.todos.map(todo => ({...todo, completed: false}));
    }
  }

  clearAll() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  countItems() {
    if (!this.todos) { return; }
    this.leftItems = this.todos.filter(todo => !todo.completed).length;
    this.completedItems = this.todos.filter(todo => todo.completed).length;
  }
}
