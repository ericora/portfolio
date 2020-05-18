import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  masonryOptions = {
    gutter: 30,
    initLayout: true,
  };
  isDropDate = false;
  constructor() {}

  ngOnInit(): void {}

  toggleDropDate() {
    this.isDropDate = !this.isDropDate;
  }
}
