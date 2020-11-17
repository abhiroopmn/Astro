import {Component, EventEmitter, Output} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {RASHIS} from '../shared.constant';

@Component({
  selector: 'astro-rashi-selector',
  templateUrl: 'rashi-selector.component.html'
})
export class RashiSelectorComponent {
  @Output() selectedRashi = new EventEmitter();

  rashis: SelectItem[] = RASHIS;

  emitRashi(option: SelectItem): void {
    this.selectedRashi.emit(option.value);
  }
}
