import { CyclistsModule } from './cyclists/cyclists.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { NgModule, PipeTransform } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { GearCheckComponent } from './gear-check/gear-check.component';
import { DateControlComponent } from './common/date-control/date-control.component';
import { HeaderComponent } from './header/header.component';
import { WheelSizeComponent } from './common/wheel-size/wheel-size.component';
import { KitComponent } from './kit/kit.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { BasicHighlightDirective } from './shared/directives/basic-hightlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-hightlight.directive';
import { AnotherHighlightDirective } from './shared/directives/another-highlight.directive';
import { FourthHighlightDirective } from './shared/directives/fourth-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';

import { GearCheckService } from './gear-check/gear-check.service';
import { UrlHelperService } from './shared/url-helper.service';
import { CyclistService } from './cyclists/cyclist.service';
import { DataStorageService } from './shared/data-storage.service';
import { BikeService } from './bikes/bike.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { BikesModule } from './bikes/bikes.module';

import { AppComponent } from './app.component';
import { GearCheckResultComponent } from './gear-check/gear-check-result/gear-check-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GearCheckComponent,
    DateControlComponent,
    HeaderComponent,
    WheelSizeComponent,
    KitComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AnotherHighlightDirective,
    FourthHighlightDirective,
    UnlessDirective,
    HomeComponent,
    NotFoundComponent,
    GearCheckResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    AuthModule,
    BikesModule,
    CyclistsModule,
    AppRoutingModule
  ],
  providers: [
    GearCheckService,
    UrlHelperService,
    CyclistService,
    BikeService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
