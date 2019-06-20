import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{todos | pipe1: status | json}}</p>
  `,
  styles: []
})
export class AppComponent {
  status: string = 'completed';
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];

}
