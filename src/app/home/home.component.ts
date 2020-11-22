import {Component} from '@angular/core';
import {UserNakshatraService} from '../shared/user-nakshatra.service';
import {UserRashiService} from '../shared/user-rashi.service';
import {UserLagnaService} from '../shared/user-lagna.service';

@Component({
  selector: 'astro-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  constructor(private userNakshatraService: UserNakshatraService,
              private userLagnaService: UserLagnaService,
              private userRashiService: UserRashiService) {
  }

  setUserNakshatra(nakshatra: string): void {
    this.userNakshatraService.setUserNakshatra(nakshatra);
  }

  setUserRashi(rashi: string): void {
    this.userRashiService.setUserRashi(rashi);
  }

  setUserLagna(lagna: string): void {
    this.userLagnaService.setUserLagna(lagna);
  }
}
