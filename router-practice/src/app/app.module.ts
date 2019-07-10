import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { ServiceComponent } from './components/service.component';
import { AboutComponent } from './components/about.component';
import { NavigationComponent } from './components/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ServiceComponent,
    AboutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
