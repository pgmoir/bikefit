import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { KitComponent } from './kit/kit.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'gear-check', loadChildren: './gear-check/gear-check.module#GearCheckModule' },
  { path: 'bikes', loadChildren: './bikes/bikes.module#BikesModule' },
  { path: 'cyclists', loadChildren: './cyclists/cyclists.module#CyclistsModule' },
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
export class AppRoutingModule { }
