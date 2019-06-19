import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-a
    [xxx]="content"
    (inputA)="content = $event"
  ></app-a>
  <app-b
    [contentA]="content"
    (inputC)="content = $event"
  ></app-b>
  `,
  styles: []
})
export class AppComponent {
  content = '';
}
