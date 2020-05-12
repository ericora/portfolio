import { MainHeaderModule } from './../shared/main-header/main-header.module';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';



@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MainHeaderModule
  ]
})
export class LayoutsModule { }
