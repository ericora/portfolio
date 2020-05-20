import { SortableComponent } from './sortable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SortableComponent],
  imports: [CommonModule],
  exports: [SortableComponent],
})
export class SortableModule {}
