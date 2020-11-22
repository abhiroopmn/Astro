import {Pipe, PipeTransform} from '@angular/core';
import {NAKSHATRAS, RASHIS} from '../shared.constant';

@Pipe({
  name: 'rashi'
})
export class RashiPipe implements PipeTransform {
  transform(value: string): string {
    const rashi =  RASHIS.find(x => x.value === value);
    return rashi ? rashi.label : '';
  }
}
