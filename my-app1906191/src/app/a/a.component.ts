import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    <input (input)="inputA.emit(xxx)"
    [(ngModel)]="xxx">

  `,
  styles: []
})
export class AComponent implements OnInit {
  @Output() inputA = new EventEmitter();
  @Input() xxx: string;

  constructor() { }

  ngOnInit() {
  }

}
