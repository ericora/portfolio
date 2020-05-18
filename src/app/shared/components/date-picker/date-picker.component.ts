import { Component, OnInit, SimpleChanges, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, OnChanges {
  @Input() selectedDate = new Date();
  @Output() dateChange = new EventEmitter();
  @Input() minDate: Date;
  @Input() maxDate: Date;
  weekdayOfFirst: number;
  daysInTheMonth: any;
  weekdays = ['Sun', 'Mon', 'Tue', 'Wes', 'Thu', 'Fri', 'Sat'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthOnShow: any;
  yearOnShow: any;
  tableOnShow = 'dates';
  monthTableValues = '';
  isDisabled: boolean;
  constructor() {

  }

  ngOnInit(): void {
    this.initCalender();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedDay) {
      const currentSelectedDay = changes.selectedDay.currentValue;
      if (currentSelectedDay) {
        this.selectedDate.setHours(0, 0, 0, 0);
        this.dateChange.emit(this.selectedDate);
      } else {
        this.selectedDate = new Date();
        this.dateChange.emit(null);
      }
      this.monthOnShow = this.selectedDate.getMonth();
      this.yearOnShow = this.selectedDate.getFullYear();
      this.updateDateOnShow();
    }
  }
  initCalender() {
    this.monthOnShow = this.selectedDate.getMonth();
    this.yearOnShow = this.selectedDate.getFullYear();
    this.daysInTheMonth = this.getDaysInMonth(this.monthOnShow, this.yearOnShow);
    this.weekdayOfFirst = this.getWeekDayOfFirstDay();


  }
  getWeekDayOfFirstDay() {
    return this.daysInTheMonth[0].getDay();
  }
  getDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  selectDate(day) {
    setTimeout(() => {
      this.selectedDate = day;
      this.dateChange.emit(this.selectedDate);
    }, 1);
  }

  updateDateOnShow() {
    this.daysInTheMonth = this.getDaysInMonth(this.monthOnShow, this.yearOnShow);
    this.weekdayOfFirst = this.getWeekDayOfFirstDay();
  }

  arrayGenerator(num) {
    return new Array(num).fill(1);
  }

  prevous() {
    switch (this.tableOnShow) {
      case 'dates':
        if (this.monthOnShow === 0) {
          this.monthOnShow = 11;
          this.yearOnShow--;
        } else {
          this.monthOnShow--;
        }
        break;
      case 'months':
        this.yearOnShow--;
        break;
      case 'years':
        this.yearOnShow = this.yearOnShow - 16;
        break;
      default:
        break;
    }
    this.updateDateOnShow();
  }

  next() {
    switch (this.tableOnShow) {
      case 'dates':
        if (this.monthOnShow === 11) {
          this.monthOnShow = 0;
          this.yearOnShow++;
        } else {
          this.monthOnShow++;
        }
        break;
      case 'months':
        this.yearOnShow++;
        break;
      case 'years':
        this.yearOnShow = this.yearOnShow + 16;
        break;
      default:
        break;
    }
    this.updateDateOnShow();
  }

  showMonths() {
    setTimeout(() => {
      this.tableOnShow = 'months';
    }, 1);
  }

  showYears() {
    setTimeout(() => {
      this.tableOnShow = 'years';
    }, 1);

  }

  generateMonth(month) {
    const theMonth = this.months.indexOf(month);
    return new Date(this.yearOnShow, theMonth, 1);
  }

  generateYears() {
    const startYear = this.yearOnShow - 7;
    const endYear = this.yearOnShow + 8;
    const years = [];
    let tempYear = startYear;
    while (tempYear <= endYear) {
      years.push(tempYear);
      tempYear++;
    }
    return years;
  }

  selectMonth(month) {
    setTimeout(() => {
      this.tableOnShow = 'dates';
      const theMonth = this.months.indexOf(month);
      this.monthOnShow = theMonth;
      this.updateDateOnShow();
    }, 1);

  }

  selectYear(year) {
    setTimeout(() => {
      this.tableOnShow = 'months';
      this.yearOnShow = year;
      this.updateDateOnShow();
    }, 1);
  }

  checkDisable(day: Date) {
    let isDisabled = false;
    if (this.minDate && !this.maxDate) {
      isDisabled = day.getTime() < this.minDate.getTime();
    }
    if (this.maxDate && !this.minDate) {
      isDisabled = day.getTime() > this.maxDate.getTime();
    }
    if (this.maxDate && this.minDate) {
      isDisabled = day.getTime() < this.minDate.getTime() || day.getTime() > this.maxDate.getTime();
    }
    return isDisabled;
  }

  checkMonthDisable(month) {
    let isDisabled = false;
    const theMonth = new Date(this.yearOnShow, this.months.indexOf(month), 1).getTime();
    if (this.minDate && !this.maxDate) {
      isDisabled = theMonth < new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1).getTime();
    }
    if (this.maxDate && !this.minDate) {
      isDisabled = theMonth > new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1).getTime();
    }
    if (this.minDate && this.maxDate) {
      isDisabled = theMonth < new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1).getTime()
        || theMonth > new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), 1).getTime();
    }
    return isDisabled;
  }

  checkYearDisable(year) {
    let isDisabled = false;
    if (this.minDate && !this.maxDate) {
      isDisabled = year < this.minDate.getFullYear();
    }
    if (this.maxDate && !this.minDate) {
      isDisabled = year > this.maxDate.getFullYear();
    }
    if (this.minDate && this.maxDate) {
      isDisabled = year < this.minDate.getFullYear() || year > this.maxDate.getFullYear();
    }
    return isDisabled;
  }
}