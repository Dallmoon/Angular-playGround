import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a [routerLink]="'/'"
       routerLinkActive="active"
       [routerLinkActiveOptions]="{ exact: true }
       ">Logo</a>
      <a routerLink="/home"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLinkActive="active"
      >Home</a>
      <a routerLink="/service"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLinkActive="active">service</a>
      <a routerLink="/about"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLinkActive="active">About</a>
      <a routerLink="/signin"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLinkActive="active">로그인</a>
      <a routerLink="/signup"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLinkActive="active">회원가입</a>
    </nav>
  `,
  styles: [`
  a {
    margin-right: 30px;
  }
    .active{
      font-weight: 700;
    }
  `]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
