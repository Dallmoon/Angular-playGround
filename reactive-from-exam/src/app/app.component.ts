import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <input type="text" name="email" placeholder="email">
      <input type="password" name="password" placeholder="password">
    </form>
  `,
  styles: []
})
export class AppComponent {
  title = 'reactive-from-exam';
}
