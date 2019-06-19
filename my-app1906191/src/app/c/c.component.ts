import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
    <input
    (input)="inputC.emit(contentA)"
    [(ngModel)]="contentA">
  `,
  styles: []
})
export class CComponent implements OnInit {
  @Input() contentA: string;
  @Output() inputC = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
