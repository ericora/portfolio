import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  LOCALE_ID,
  Inject,
  NgZone,
} from '@angular/core';
import { formatDate } from '@angular/common';
import { isDate } from 'util';
import * as Muuri from 'muuri';

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

  dragItemsLeft = ['Eric', 'Jessica', 'Billy', 'Chloe'];
  dragItemsRight = ['Furion', 'Carol'];
  constructor(@Inject(LOCALE_ID) public locale: string, private zone: NgZone) {}

  ngOnInit(): void {
    this.muuriMasonry();
  }

  muuriMasonry() {
    this.zone.runOutsideAngular(() =>
      setTimeout(() => {
        const grid = new Muuri.default('.grid');
      }, 100)
    );
  }

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

  dragging(item) {
    console.log(item);
  }
  drop(item) {}
}
