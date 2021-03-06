import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { PopupContainerComponent } from './popup-container/popup-container.component';
import { PopupMainComponent } from './popup-main/popup-main.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    PopupContainerComponent,
    PopupMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
