import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="ngSubmitHandler(form)" #form="ngForm" novalidate>
      <input type="email" placeholder="email" name="email" ngModel #email="ngModel"
      pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
      required>
      <span *ngIf="email.errors?.required && email.touched">이메일은 필수 입력 사항입니다!</span>
      <span *ngIf="email.invalid && email.touched && email.value">올바른 이메일 형식을 입력해 주세요. 예시는 example@example.com입니다!</span>
      <input type="password" placeholder="password" name="password"
      ngModel #password="ngModel"
      pattern="^[a-zA-Z0-9]{4,10}$"
      required>
      <span *ngIf="password.errors?.required && password.touched">비밀번호는 필수 입력 사항입니다!</span>
      <span *ngIf="password.invalid && password.touched && password.value">영어 대,소문자와 숫자를 포함하여 4자 이상 10자 이하로 작성하여 주세요.</span>
      <button class="btn">Submit</button>
    </form>

  `,
  styles: [`
  input{
    display: block;
  }`]
})
export class AppComponent {
  title = 'template-driven-form-exam';

  ngSubmitHandler(e) {
    
  }
}
