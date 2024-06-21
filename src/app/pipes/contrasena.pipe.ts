import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena',
  standalone: true
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    return (mostrar)?'*'.repeat(value.length):value;
  }

}
