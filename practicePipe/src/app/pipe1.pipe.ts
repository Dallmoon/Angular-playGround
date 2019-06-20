import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(todos, status): any {
    if (status === 'all') {return todos; }
    if (status === 'active') {return todos.filter(todo => todo.completed === true); }
    if (status === 'completed') {return todos.filter(todo => todo.completed !== true); }
  }

}
