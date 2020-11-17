import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UserNakshatraService {
  private value = '';
  userNakshatra = new BehaviorSubject('');

  setUserNakshatra(option: string): void {
    console.log(option);
    this.value = option;
    this.userNakshatra.next(option);
  }
}
