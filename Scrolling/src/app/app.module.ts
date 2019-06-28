import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollComponentComponent } from './scroll-component/scroll-component.component';
import { ScrollDirectiveDirective } from './scroll-directive.directive';
import { ScrollTopDirective } from './scroll-top.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponentComponent,
    ScrollDirectiveDirective,
    ScrollTopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
