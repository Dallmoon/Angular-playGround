import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="signIn(userForm)" #userForm="ngForm">
      <input type="text" placeholder="아이디" name="id"
       ngModel #id="ngModel"
       required>
      <input type="password" placeholder="비밀번호" name="password"
       ngModel #password="ngModel"
       required>
       <button [disabled]="userForm.invalid">로그인</button>
    </form>
    <pre>{{userForm.invalid | json}}</pre>
  `,
  styles: []
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  signIn(userForm) {
    console.log(userForm);
    // 성공
    this.router.navigate(['home']);

    // 실패
    this.router.navigate(['signin']);
  }

}
