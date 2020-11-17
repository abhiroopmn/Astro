import {Component} from '@angular/core';
import {UserNakshatraService} from '../shared/user-nakshatra.service';

@Component({
  selector: 'astro-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(private userNakshatraService: UserNakshatraService) {
  }

  setUserNakshatra(nakshatra: string): void {
    console.log(nakshatra);
    this.userNakshatraService.setUserNakshatra(nakshatra);
  }
}
