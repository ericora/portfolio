import { MainHeaderModule } from '../shared/components/main-header/main-header.module';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    ExperiencesComponent,
    ComponentsComponent,
  ],
  imports: [CommonModule, LayoutsRoutingModule, MainHeaderModule],
})
export class LayoutsModule {}
