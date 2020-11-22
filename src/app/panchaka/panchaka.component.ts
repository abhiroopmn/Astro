import {Component} from '@angular/core';
import {UserNakshatraService} from '../shared/user-nakshatra.service';
import {UserLagnaService} from '../shared/user-lagna.service';
import {LAGNAS, NAKSHATRAS} from '../shared/shared.constant';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'astro-panchaka',
  templateUrl: 'panchaka.component.html',
  styleUrls: ['panchaka.component.scss']
})
export class PanchakaComponent {
  thithi = '';
  day = '';
  userNakshatra = '';
  userLagna = '';

  constructor(private userNakshatraService: UserNakshatraService, private userLagnaService: UserLagnaService) {
    this.userNakshatraService.userNakshatra.subscribe(nakshatra => {
      this.userNakshatra = nakshatra;
      // this.calculateGurubala();
    });

    this.userLagnaService.userLagna.subscribe(lagna => {
      this.userLagna = lagna;
      // this.calculateGurubala();
    });
  }

  setThithi(thithi: string): void {
    this.thithi = thithi;
    // this.calculateChandrabala();
  }

  setDay(day: string): void {
    this.day = day;
    // this.calculateChandrabala();
  }
}
