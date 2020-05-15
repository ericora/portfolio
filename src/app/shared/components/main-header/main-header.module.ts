import { DropSelectModule } from './../drop-select/drop-select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header.component';
import { TabsModule } from '../tabs/tabs.module';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [CommonModule, TabsModule, DropSelectModule],
  exports: [MainHeaderComponent],
})
export class MainHeaderModule {}
