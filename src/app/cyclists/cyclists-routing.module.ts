import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyclistsComponent } from './cyclists.component';

const cyclistRoutes: Routes = [
  { path: '', component: CyclistsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(cyclistRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CyclistsRoutingModule { }
