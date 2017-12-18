import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { RegisterEmailComponent } from './auth/register-email/register-email.component';
import { LoginEmailComponent } from './auth/login-email/login-email.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { KitComponent } from './kit/kit.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-email', component: LoginEmailComponent },
  { path: 'register-email', component: RegisterEmailComponent },
  { path: 'gear-check', loadChildren: './gear-check/gear-check.module#GearCheckModule' },
  { path: 'bikes', loadChildren: './bikes/bikes.module#BikesModule' },
  { path: 'cyclists', loadChildren: './cyclists/cyclists.module#CyclistsModule' },
  { path: 'kit', component: KitComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
