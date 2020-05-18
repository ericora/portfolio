import { NgModule } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule],
  exports: [DatePickerComponent],
})
export class DatePickerModule {}
