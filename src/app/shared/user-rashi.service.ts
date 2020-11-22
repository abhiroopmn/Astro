import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UserRashiService {
  private value = '';
  userRashi = new BehaviorSubject('');

  setUserRashi(option: string): void {
    console.log(option);
    this.value = option;
    this.userRashi.next(option);
  }
}
