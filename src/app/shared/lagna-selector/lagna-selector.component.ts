import {Component, EventEmitter, Output} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {LAGNAS} from '../shared.constant';

@Component({
  selector: 'astro-lagna-selector',
  templateUrl: 'lagna-selector.component.html'
})
export class LagnaSelectorComponent {
  @Output() selectedLagna = new EventEmitter();

  lagnas: SelectItem[] = LAGNAS;

  emitLagna(option: SelectItem): void {
    this.selectedLagna.emit(option.value);
  }
}
