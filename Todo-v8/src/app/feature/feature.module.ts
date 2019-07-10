import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { TodoContainerComponent } from './Components/todo-container.component';
import { TodoFooterComponent } from './Components/todo-footer.component';
import { TodoFormComponent } from './Components/todo-form.component';
import { TodoListComponent } from './Components/todo-list.component';
import { TodoNavComponent } from './Components/todo-nav.component';
import { TodoSpinnerComponent } from './Components/todo-spinner.component';

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
