import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navigation></app-navigation>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'router-practice';
}
