import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SelectedNakshatraService {
  private value = '';
  selectedNakshatra = new BehaviorSubject('');

  setSelectedNakshatra(option: string): void {
    this.value = option;
    this.selectedNakshatra.next(option);
  }
}
