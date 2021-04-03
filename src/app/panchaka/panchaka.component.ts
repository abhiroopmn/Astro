import {Component} from '@angular/core';
import {SelectedNakshatraService} from '../shared/selected-nakshatra.service';
import {SelectedRashiService} from '../shared/selected-rashi.service';

@Component({
  selector: 'astro-panchaka',
  templateUrl: 'panchaka.component.html',
  styleUrls: ['panchaka.component.scss']
})
export class PanchakaComponent {
  thithi = '';
  thithiValue: number|undefined;
  selectedDayValue: number|undefined;
  selectedNakshatraValue: number|undefined;
  selectedLagnaValue: number|undefined;
  selectedRashiValue: number|undefined;
  day = '';
  selectedNakshatra = '';
  selectedRashi = '';
  selectedLagna = '';
  userLagna = '';

  constructor(private selectedNakshatraService: SelectedNakshatraService, private selectedRashiService: SelectedRashiService) {
    this.selectedNakshatraService.selectedNakshatra.subscribe(nakshatra => {
      this.setSelectedNakshatra(nakshatra);
      // this.calculateGurubala();
    });

    this.selectedRashiService.selectedRashi.subscribe(rashi => {
      this.setSelectedRashi(rashi);
      // this.calculateGurubala();
    });
  }

  setThithi(thithi: string): void {
    console.log(thithi);
    this.thithi = thithi;
    this.thithiValue = parseInt(thithi, 10);
    // this.calculateChandrabala();
  }

  setDay(day: string): void {
    this.day = day;
    this.selectedDayValue = parseInt(day, 10);
    // this.calculateChandrabala();
  }

  setSelectedNakshatra(nakshatra: string): void {
    this.selectedNakshatra = nakshatra;
    if (nakshatra) {
      this.selectedNakshatraValue = parseInt(nakshatra, 10);
    }
  }

  setSelectedLagna(lagna: string): void {
    this.selectedLagna = lagna;
    if (lagna) {
      this.selectedLagnaValue = parseInt(lagna, 10);
    }
  }

  setSelectedRashi(rashi: string): void {
    this.selectedRashi = rashi;
    if (rashi) {
      this.selectedRashiValue = parseInt(rashi, 10);
    }
  }
}
