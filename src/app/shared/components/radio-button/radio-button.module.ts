import { RadioButtonComponent } from './radio-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioMaterialComponent } from './radio-material/radio-material.component';

@NgModule({
  declarations: [RadioButtonComponent, RadioMaterialComponent],
  imports: [CommonModule],
  exports: [RadioButtonComponent, RadioMaterialComponent],
})
export class RadioButtonModule {}
