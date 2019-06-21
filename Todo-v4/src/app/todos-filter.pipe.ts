import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';

@Pipe({
  name: 'todosFilter', // 메타데이터
  pure: false
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[],   navState?: NavItem): Todo[] {
    return todos.filter(todo => {
      if (navState === 'Active') { return todo.completed; }
      if (navState === 'Completed') { return !todo.completed; }
      return true;
  });
}

}
