import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  links = [
    { title: 'Home', value: 'home' },
    { title: 'Experiences', value: 'news' },
    { title: 'Components', value: 'insights' },
    { title: 'Dashbord', value: 'dashbord' },
    { title: 'Contact', value: 'contact' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
