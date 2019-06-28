import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  constructor() { }

  sayHi() {
    return 'Hi';
  }
}
