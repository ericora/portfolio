import { TabsModule } from "./../tabs/tabs.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainHeaderComponent } from "./main-header.component";

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [CommonModule, TabsModule],
  exports: [MainHeaderComponent],
})
export class MainHeaderModule {}
