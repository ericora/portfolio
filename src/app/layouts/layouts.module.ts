import { ProjectModule } from './../shared/components/project/project.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { SortableModule } from './../shared/components/sortable/sortable.module';
import { RadioButtonModule } from './../shared/components/radio-button/radio-button.module';
import { DatePickerModule } from './../shared/components/date-picker/date-picker.module';
import { MainHeaderModule } from '../shared/components/main-header/main-header.module';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ComponentsComponent } from './components/components.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    ExperiencesComponent,
    ComponentsComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MainHeaderModule,
    NgxMasonryModule,
    DatePickerModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SortableModule,
    AlertModule,
    ProjectModule,
  ],
})
export class LayoutsModule {}
