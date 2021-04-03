import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SelectedRashiService {
  private value = '';
  selectedRashi = new BehaviorSubject('');

  setSelectedRashi(option: string): void {
    this.value = option;
    this.selectedRashi.next(option);
  }
}
