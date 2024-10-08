import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
  standalone: true
})
export class TitlecasePipe implements PipeTransform {

transform(value: string): string {
  if (!value) return value;
  return value[0].toUpperCase()+value.slice(1).toLowerCase();
}


}
