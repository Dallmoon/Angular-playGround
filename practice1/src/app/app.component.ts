import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{data}}
    <div [class.textRed]="true">Class</div>
    <input type="checkbox" [attr.checked]="true">
    <input type="checkbox" [checked]="true">
    {{title}}
    <input [value]="title" [(ngModel)]="title">
    <app-rx></app-rx>
  `,
  styles: [`
  .textRed{
    color: red;
  }
  `]
})
export class AppComponent {
  data = 'Hello world!';
  title = 'practice1';
}
