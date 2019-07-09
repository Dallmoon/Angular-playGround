import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodoContainerComponent } from './viewComponents/todo-container/todo-container.component';
import { TodoFormComponent } from './viewComponents/todo-form/todo-form.component';
import { TodoNavComponent } from './viewComponents/todo-nav/todo-nav.component';
import { TodoListComponent } from './viewComponents/todo-list/todo-list.component';
import { TodoFooterComponent } from './viewComponents/todo-footer/todo-footer.component';
import { TodoSpinnerComponent } from './viewComponents/todo-spinner/todo-spinner.component';

import { FilterTodoPipe } from './pipes/filter-todo.pipe';
import { PipePraticePipe } from './pipe-pratice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent,
    FilterTodoPipe,
    TodoSpinnerComponent,
    PipePraticePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
