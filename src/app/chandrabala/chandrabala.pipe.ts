import {Pipe, PipeTransform} from '@angular/core';
import {CHANDRABALA_RESULT, TARABALA_RESULT} from '../shared/shared.constant';

@Pipe({
  name: 'chandrabala'
})
export class ChandrabalaPipe implements PipeTransform {
  transform(value: number): string {
    const result = CHANDRABALA_RESULT.find(x => x.value === value);
    if (result) {
      return result.label;
    } else {
      return '';
    }
  }
}
