import { FirebaseService } from './../../shared/services/api/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  constructor(private fb: FormBuilder, private fireService: FirebaseService) {}
  ngOnInit(): void {}
  onSubmit() {
    this.fireService.sendEmailToMe(this.messageForm.value).subscribe(
      (res) => {},
      (error) => {
        if (error.status === 200) {
        }
      }
    );
  }
}
