import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], status: string): Todo[] {
    if (status === 'all') {return todos; }
    if (status === 'active') {return todos.filter(todo => todo.completed !== true); }
    if (status === 'completed') {return todos.filter(todo => todo.completed === true); }
  }

}
