import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FilterTodosPipe } from './filter-todos.pipe';
import { TeacherTodoComponent } from './teacher-todo/teacher-todo.component';
import { TodosFilterPipe } from './todos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FilterTodosPipe,
    TeacherTodoComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
