import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./pages/pages.module').then(mod => mod.PagesModule)
  //     },
  //     {
  //       path: '',
  //       redirectTo: '',
  //       pathMatch: 'full'
  //     }
  //   ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
