import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { BikeService } from '../bikes/bike.service';
import { CyclistService } from '../cyclists/cyclist.service';
import { UrlHelperService } from '../shared/url-helper.service';
import { GearCheckService } from '../gear-check/gear-check.service';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
      HeaderComponent,
      HomeComponent
  ],
  imports: [
      SharedModule,
      AppRoutingModule
  ],
  exports: [
      AppRoutingModule,
      HeaderComponent
  ] ,
  providers: [
    GearCheckService,
    UrlHelperService,
    CyclistService,
    BikeService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
})
export class CoreModule { }
