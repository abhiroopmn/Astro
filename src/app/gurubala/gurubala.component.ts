import {Component} from '@angular/core';
import {UserRashiService} from '../shared/user-rashi.service';

@Component({
  selector: 'astro-gurubala',
  templateUrl: 'gurubala.component.html',
  styleUrls: ['gurubala.component.scss']
})
export class GurubalaComponent {
  rashi = '';
  userRashi = '';
  gurubala = -1;

  constructor(private userRashiService: UserRashiService) {
    this.userRashiService.userRashi.subscribe(rashi => {
      this.userRashi = rashi;
      this.calculateGurubala();
    });
  }

  calculateGurubala(): void {
    if (this.userRashi && this.rashi) {
      const value1 = parseInt(this.userRashi, 10);
      const value2 = parseInt(this.rashi, 10);
      if (value2 >= value1) {
        this.gurubala = value2 - value1 + 1;
      } else {
        this.gurubala = (12 - value1 + value2 + 1);
      }
    }
  }

  setRashi(rashi: string): void {
    this.rashi = rashi;
    this.calculateGurubala();
  }
}
