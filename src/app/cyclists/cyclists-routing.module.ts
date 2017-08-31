import { CyclistsComponent } from './cyclists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const cyclistRoutes: Routes = [
  { path: 'cyclists', component: CyclistsComponent }
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
