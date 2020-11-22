import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UserLagnaService {
  private value = '';
  userLagna = new BehaviorSubject('');

  setUserLagna(option: string): void {
    this.value = option;
    this.userLagna.next(option);
  }
}
