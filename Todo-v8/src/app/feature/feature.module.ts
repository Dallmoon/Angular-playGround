import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { TodoContainerComponent } from './viewComponents/todo-container/todo-container.component';
import { TodoFooterComponent } from './viewComponents/todo-footer/todo-footer.component';
import { TodoFormComponent } from './viewComponents/todo-form/todo-form.component';
import { TodoListComponent } from './viewComponents/todo-list/todo-list.component';
import { TodoNavComponent } from './viewComponents/todo-nav/todo-nav.component';
import { TodoSpinnerComponent } from './viewComponents/todo-spinner/todo-spinner.component';

import { FilterTodoPipe } from '../shared/pipes/filter-todo.pipe';

@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoFooterComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoNavComponent,
    TodoSpinnerComponent,
    FilterTodoPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [TodoContainerComponent,
    TodoFooterComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoNavComponent,
    TodoSpinnerComponent]
})

export class FeatureModule { }
