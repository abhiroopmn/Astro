import {Component, EventEmitter, Output} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {RASHIS, THITHIS} from '../shared.constant';

@Component({
  selector: 'astro-thithi-selector',
  templateUrl: 'thithi-selector.component.html'
})
export class ThithiSelectorComponent {
  @Output() selectedThithi = new EventEmitter();

  thithis: SelectItem[] = THITHIS;

  emitThithi(option: SelectItem): void {
    this.selectedThithi.emit(option.value);
  }
}
