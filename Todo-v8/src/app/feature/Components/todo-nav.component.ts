import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../shared/types/navItem.type';

@Component({
  selector: 'app-todo-nav',
  template: `
  <ul class="nav">
    <li *ngFor="let navItem of navItems" [class.active]="navState === navItem"
    (click)="clickNavItem(navItem)">{{navItem}}</li>
  </ul>
  `,
  styles: [`
  .nav {
    display: flex;
    margin: 15px;
    list-style: none;
  }

  .nav > li {
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .nav > li.active {
    color: #fff;
    background-color: #23b7e5;
  }`]
})
export class TodoNavComponent implements OnInit {
  @Input() navState: NavItem;
  @Output() clickNav = new EventEmitter();

  navItems: NavItem[] = ['All', 'Active', 'Completed'];

  constructor() { }

  ngOnInit() {}

  clickNavItem(navItem: NavItem) {
    this.clickNav.emit(navItem);
  }
}
