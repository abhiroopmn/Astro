import {Component} from '@angular/core';
import {UserNakshatraService} from '../shared/user-nakshatra.service';

@Component({
  selector: 'astro-tarabala',
  templateUrl: 'tarabala.component.html',
  styleUrls: ['tarabala.component.scss']
})
export class TarabalaComponent {
  userNakshatra = '';
  nakshatra2 = '';
  tarabalaValue = 0;

  constructor(private userNakshatraService: UserNakshatraService) {
    this.userNakshatraService.userNakshatra.subscribe(nakshatra => {
      this.userNakshatra = nakshatra;
      this.calculateTarabala();
    });
  }

  calculateTarabala(): void {
    console.log('Calculating');
    const value1 = parseInt(this.userNakshatra, 10);
    const value2 = parseInt(this.nakshatra2, 10);

    if (value1 && value2) {
      if (value2 >= value1) {
        this.tarabalaValue = (value2 - value1 + 1) % 9;
      } else {
        this.tarabalaValue = (27 - value1 + value2 + 1) % 9;
      }
    }

  }

  setNakshatra2(nakshatra: string): void {
    this.nakshatra2 = nakshatra;
    this.calculateTarabala();
  }
}
