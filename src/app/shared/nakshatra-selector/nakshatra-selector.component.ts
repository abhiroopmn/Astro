import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {NAKSHATRAS} from '../shared.constant';

@Component({
  selector: 'astro-nakshatra-selector',
  templateUrl: 'nakshatra-selector.component.html'
})
export class NakshatraSelectorComponent {
  @Input() nakshatra: string|undefined;
  @Output() selectedNakshatra = new EventEmitter();
  @Input() disabled = false;

  nakshatras: SelectItem[] = NAKSHATRAS;

  emitNakshatra(option: SelectItem): void {
    this.selectedNakshatra.emit(option.value);
  }
}
