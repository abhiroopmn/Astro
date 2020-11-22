import {Component, EventEmitter, Output} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {DAYS, RASHIS, THITHIS} from '../shared.constant';

@Component({
  selector: 'astro-day-selector',
  templateUrl: 'day-selector.component.html'
})
export class DaySelectorComponent {
  @Output() selectedDay = new EventEmitter();

  days: SelectItem[] = DAYS;

  emitDay(option: SelectItem): void {
    this.selectedDay.emit(option.value);
  }
}
