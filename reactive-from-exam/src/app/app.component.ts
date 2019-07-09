import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="userForm">
      <input type="text" placeholder="userId"
      formControlName="id">
      <p *ngIf="userid.errors?.required && userid.touched">아이디를 입력해주세요</p>
      <p *ngIf="userid.errors?.pattern && userid.touched">올바르지 않은 아이디 형식</p>
      <button>Submit</button>

      <div formGroupName="passwordGroup">
        <input type="password" placeholder="userPassword"
        formControlName="password">
        <input type="password" placeholder="confirmPassword"
        formControlName="confirmPassword">
        <p *ngIf="passwordGroup.errors?.match && password.touched && confirmPassword.touched">????</p>
      </div>
    </form>

    <pre>userForm.value: {{userForm.value | json}}</pre>
    <pre>userForm.valid: {{userForm.valid}}</pre>
    <pre>userid.value: {{userid.value}}</pre>

    `,
  styles: []
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.pattern('')]),

      passwordGroup: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z]{4,10}')]),

        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z]{4,10}')])
      },
      PasswordValidator.match)
    });
    // this.userForm = this.fb.group({
    //   id: ['', [
    //     Validators.required,
    //     Validators.pattern('[a-zA-Z]{4,10}')
    //   ]],
    //   passwordGroup: this.fb.group({
    //     password: ['', Validators.required],
    //     confirmPassword: ['', Validators.required]
    //   }, { validator: PasswordValidator.match }
    //   )
    // });
  }

  get userid() {
    return this.userForm.get('id');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }
}
