import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-a',
  template: `
    <input (input)="dataService.data = $event.target.value"
    [value]="dataService.data">
  `,
  styles: []
})
export class AComponent {
  
  constructor(public dataService: DataService) {

  }
}
