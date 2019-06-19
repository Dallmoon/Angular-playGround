import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-c',
  template: `
    <input [value]="dataService.data"
    (input)="dataService.data = $event.target.value">
  `,
  styles: []
})
export class CComponent {

  constructor(public dataService: DataService) {

  }

}
