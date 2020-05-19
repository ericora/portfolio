import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  LOCALE_ID,
  Inject,
} from '@angular/core';
import { formatDate } from '@angular/common';
import { isDate } from 'util';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  public masonryOptions = {
    gutter: 30,
    transitionDuration: '0s',
    initLayout: true,
    originTop: true,
    originLeft: true,
    horizontalOrder: true,
    // itemSelector: '.masonry-item-c',
  };
  inputDate;
  selectedDate = new Date();
  @ViewChild('dropDate') dropDate: ElementRef;
  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(): void {}

  inputDateTo(key) {
    if (key.keyCode === 13) {
      const date = new Date(this.inputDate);
      const isADate = isDate(date);
      if (isADate) {
        this.selectedDate = date;
      } else {
        this.inputDate = 'Invalid Date';
      }
    }
  }

  dateChange(date) {
    this.inputDate = formatDate(date, 'MM/dd/yyyy', this.locale);
  }
}
