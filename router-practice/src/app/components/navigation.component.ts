import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a [routerLink]="'/'">Logo - 프로퍼티 바인딩</a>
      <a routerLink="/">Logo - 어트리뷰트</a>
      <a routerLink="/service">service</a>
      <a routerLink="/about">About</a>
    </nav>
  `,
  styles: [`
  a{
    margin-right: 30px;
  }`]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
