import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../types/todo.interface';
import { NavItem } from '../types/navItem.type';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], navState: NavItem): Todo[] {
    if (navState === 'All') { return todos; }
    if (navState === 'Active') { return todos.filter(todo => todo.completed !== true); }
    if (navState === 'Completed') { return todos.filter(todo => todo.completed === true); }
  }

}
