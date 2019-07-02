import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-popup-main',
  template: `
  <h1>JavaScript Popup</h1>
  <button class="toggle-popup" (click)="showPopup.emit()">show popup</button>
  <p class="popup-message"
  *ngIf="formContent">form Content:{{formContent}}</p>
  `,
  styles: []
})
export class PopupMainComponent implements OnInit {
  @Output() showPopup = new EventEmitter();
  @Input() formContent: string;
  constructor() { }

  ngOnInit() {
  }

}
