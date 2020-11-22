import {Pipe, PipeTransform} from '@angular/core';
import {CHANDRABALA_RESULT, GURUBALA_RESULT, TARABALA_RESULT} from '../shared/shared.constant';

@Pipe({
  name: 'gurubala'
})
export class GurubalaPipe implements PipeTransform {
  transform(value: number): string {
    const result = GURUBALA_RESULT.find(x => x.value === value);
    if (result) {
      return result.label;
    } else {
      return '';
    }
  }
}
