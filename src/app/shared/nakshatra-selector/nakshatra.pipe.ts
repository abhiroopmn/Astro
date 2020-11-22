import {Pipe, PipeTransform} from '@angular/core';
import {NAKSHATRAS} from '../shared.constant';

@Pipe({
  name: 'nakshatra'
})
export class NakshatraPipe implements PipeTransform {
  transform(value: string): string | undefined {
    const nakshatra =  NAKSHATRAS.find(x => x.value === value);
    return nakshatra ? nakshatra.label : '';
  }
}
