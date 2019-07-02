import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
  <div class="popup" [class.active]="status">
    <h1>JavaScript Popup</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    <button class="btn-close" (click)="hidePopup.emit()">X</button>
    <input type="text" #input>
    <button class="btn-ok" (click)="hidePopup.emit(input.value)">OK</button>
    <button class="btn-cancel" (click)="hidePopup.emit()">Cancel</button>
  </div>
  <div class="overlay" (click)="hidePopup.emit()" [class.active]="status"></div>
  `,
  styles: [`
  
  .popup {
    position: absolute;
    width: 70vw;
    height: 50vh;
    background: #ffffff;
    top: 20vh;
    left: 15vw;
    padding: 15px;
    display: none;
    z-index: 2;
  }
  .overlay {
    background:rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    display: none;
  }
  .btn-close {
    position: absolute;
    top: 10%;
    right: 5%;
  }
  .active {
    display: block;
  }
  .popup p {
    display: block;
    height: 50%;
    margin: 20px 0;
  }`]
})
export class PopupComponent implements OnInit {
  @Input() status: boolean;
  @Output() hidePopup = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
}
