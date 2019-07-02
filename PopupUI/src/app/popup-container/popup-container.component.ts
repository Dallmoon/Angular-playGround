import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-container',
  template: `
  <app-popup-main (showPopup)="showPopup()" [formContent]="formContent"></app-popup-main>
  <app-popup [status]="status" (hidePopup)="hidePopup($event)"></app-popup>
  `,
  styles: []
})
export class PopupContainerComponent implements OnInit {
  status = false;
  formContent: string;
  constructor() { }

  ngOnInit() {
  }

  showPopup() {
    this.status = true;
  }
  hidePopup(formContent) {
    this.status = false;
    if (formContent) {
      this.formContent = formContent;
    }
  }
}
