import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-container',
  template: `
  <app-popup-main (showPopup)="showPopup()" [formContent]="formContent"></app-popup-main>
  <app-popup [status]="status" (hidePopup)="hidePopup()" (inputContent)="inputContent($event)"></app-popup>
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

  hidePopup() {
    this.status = false;
  }

  inputContent(formContent: string) {
    if (!formContent.trim()) { return; }
    this.formContent = formContent.trim();
    this.hidePopup();
  }
}
