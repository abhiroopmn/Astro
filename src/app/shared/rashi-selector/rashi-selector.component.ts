import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {RASHIS} from '../shared.constant';

@Component({
  selector: 'astro-rashi-selector',
  templateUrl: 'rashi-selector.component.html'
})
export class RashiSelectorComponent {
  @Output() selectedRashi = new EventEmitter();
  @Input() rashi: string|undefined;
  @Input() disabled = false;

  rashis: SelectItem[] = RASHIS;

  emitRashi(option: SelectItem): void {
    this.selectedRashi.emit(option.value);
  }
}
