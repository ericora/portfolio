import { AlertService } from './../../shared/services/alert.service';
import { FirebaseService } from './../../shared/services/api/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  messageForm = this.fb.group({
    email: [''],
    message: [''],
  });
  constructor(
    private fb: FormBuilder,
    private fireService: FirebaseService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    this.fireService.sendEmailToMe(this.messageForm.value).subscribe(
      (res) => this.sentMsgOver(),
      (error) => {
        if (error.status === 200) {
          this.sentMsgOver();
        }
      }
    );
  }

  sentMsgOver() {
    const successMsg =
      'Message successfully sent. I will get back to you later. Thank you.';
    const successTheme = 'success';
    this.alertService.sendMsg(successMsg, successTheme);
    this.messageForm.setValue({ email: '', message: '' });
  }
}
