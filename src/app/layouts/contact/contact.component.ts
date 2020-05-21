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
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.messageForm.value);
  }
}
