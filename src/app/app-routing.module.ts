import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { BikeDetailComponent } from './bikes/bike-detail/bike-detail.component';
import { BikeStartComponent } from './bikes/bike-start/bike-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { KitComponent } from './kit/kit.component';
import { CyclistsComponent } from './cyclists/cyclists.component';
import { BikesComponent } from './bikes/bikes.component';
import { GearCheckComponent } from './gear-check/gear-check.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'gear-check', component: GearCheckComponent },
  { path: 'bikes', component: BikesComponent, children: [
    { path: '', component: BikeStartComponent },
    { path: ':id', component: BikeDetailComponent },
    { path: 'new', component: BikeEditComponent },
    { path: ':id/edit', component: BikeDetailComponent }
  ] },
  { path: 'cyclists', component: CyclistsComponent },
  { path: 'kit', component: KitComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}