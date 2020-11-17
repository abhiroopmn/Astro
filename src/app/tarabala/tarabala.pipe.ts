import {Pipe, PipeTransform} from '@angular/core';
import {TARABALA_RESULT} from '../shared/shared.constant';

@Pipe({
  name: 'tarabala'
})
export class TarabalaPipe implements PipeTransform {
  transform(value: number): string {
    const result = TARABALA_RESULT.find(x => x.value === value);
    if (result) {
      return result.label;
    } else {
      return '';
    }
  }
}
