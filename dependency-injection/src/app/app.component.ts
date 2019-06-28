import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">SayHi</button>
    {{greeting}}
  `,
  styles: [],
  // providers: [GreetingService]
})
export class AppComponent {
  greeting: string;
  // greetingService: GreetingService;
  constructor(public greetingService: GreetingService) {
    // this.greetingService 
  }
  sayHi() {
   this.greeting = this.greetingService.sayHi();
  }
}
