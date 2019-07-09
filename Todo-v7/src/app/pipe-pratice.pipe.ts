import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePratice'
})
export class PipePraticePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
