import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth/auth-guard.service';

import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';
import { BikeStartComponent } from './bike-start/bike-start.component';
import { BikesComponent } from './bikes.component';

const bikesRoutes: Routes = [
  { path: '', component: BikesComponent, children: [
    { path: '', component: BikeStartComponent },
    { path: 'new', component: BikeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: BikeDetailComponent },
    { path: ':id/edit', component: BikeEditComponent, canActivate: [AuthGuard] }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(bikesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BikesRoutingModule { }
