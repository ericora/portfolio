import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  isAlert = new BehaviorSubject(false);
  isAlertObs$ = this.isAlert.asObservable();
  alertMsg = new BehaviorSubject({ message: '', theme: 'normal' });
  alertMsgObs$ = this.alertMsg.asObservable();
  constructor() {}

  sendMsg(msg, theme?) {
    this.isAlert.next(true);
    const msgOptions = { message: msg, theme: theme ? theme : 'normal' };
    this.alertMsg.next(msgOptions);
  }

  closeAlert() {
    this.isAlert.next(false);
  }
}
