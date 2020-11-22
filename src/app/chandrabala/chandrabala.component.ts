import {Component} from '@angular/core';
import {UserRashiService} from '../shared/user-rashi.service';

@Component({
  selector: 'astro-chandrabala',
  templateUrl: 'chandrabala.component.html',
  styleUrls: ['chandrabala.component.scss']
})
export class ChandrabalaComponent {
  rashi = '';
  userRashi = '';
  chandrabala = -1;

  constructor(private userRashiService: UserRashiService) {
    this.userRashiService.userRashi.subscribe(rashi => {
      this.userRashi = rashi;
      this.calculateChandrabala();
    });
  }

  calculateChandrabala(): void {
    if (this.userRashi && this.rashi) {
      const value1 = parseInt(this.userRashi, 10);
      const value2 = parseInt(this.rashi, 10);
      if (value2 >= value1) {
        this.chandrabala = value2 - value1 + 1;
      } else {
        this.chandrabala = (12 - value1 + value2 + 1);
      }
    }
  }

  setRashi(rashi: string): void {
    this.rashi = rashi;
    this.calculateChandrabala();
  }
}
