import { AuthGuard } from './shared/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { KitComponent } from './kit/kit.component';
import { CyclistsComponent } from './cyclists/cyclists.component';
import { BikesComponent } from './bikes/bikes.component';
import { GearCheckComponent } from './gear-check/gear-check.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'gear-check', component: GearCheckComponent },
  { path: 'bikes', component: BikesComponent }, // , canActivate: [AuthGuard]
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
