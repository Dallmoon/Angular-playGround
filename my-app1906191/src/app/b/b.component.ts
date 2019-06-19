import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    <app-c [contentA]="contentA"
     (inputC)="inputC.emit($event)"></app-c>
  `,
  styles: []
})
export class BComponent implements OnInit {
  @Input() contentA: string;
  @Output() inputC = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
