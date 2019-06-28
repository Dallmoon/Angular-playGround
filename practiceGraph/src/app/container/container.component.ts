import { Component, OnInit } from '@angular/core';
import { Data } from '../data.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  template: `
    <pre>{{list | json}}</pre>
  `,
  styles: []
})
export class ContainerComponent implements OnInit {
  list: Data[];
  constructor() { }

  ngOnInit() {
    this.list = [
      {  id: 1,
        name: 'bitcoin',
        currentValue: 14630000,
        premium: 3.23,
        previous: 5.09,
        next: -0.68,
        rised: 311.68,
        allPriced: 300300000000},
        {  id: 2,
          name: 'ETR',
          currentValue: 398000,
          premium: 3.23,
          previous: 5.09,
          next: -0.68,
          rised: 311.68,
          allPriced: 300300000000}
    ];
  }

}
