import {Pipe, PipeTransform} from '@angular/core';
import {CHANDRABALA_RESULT, TARABALA_RESULT} from '../shared/shared.constant';

// Return 0 if neutral, 1 if good and -1 if bad
@Pipe({
  name: 'chandrabalaColor'
})
export class ChandrabalaColorPipe implements PipeTransform {
  transform(value: number): number {
    let result;
    switch (value) {
      case 1:
      case 3:
      case 7:
      case 8:
      case 10:
      case 11:
        result = 1;
        break;
      case 2:
      case 4:
      case 5:
      case 6:
      case 9:
      case 12:
        result = -1;
        break;
      default:
        result = 0;
    }
    return result;
  }
}
