import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    <app-c></app-c>
  `,
  styles: []
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
