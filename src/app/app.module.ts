import { BikeService } from './bikes/bike.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { GearCheckComponent } from './gear-check/gear-check.component';
import { GearCheckResultComponent } from './gear-check/gear-check-result/gear-check-result.component';
import { GearCheckCyclistComponent } from './gear-check/gear-check-cyclist/gear-check-cyclist.component';
import { GearCheckBikeComponent } from './gear-check/gear-check-bike/gear-check-bike.component';
import { DateControlComponent } from './common/date-control/date-control.component';
import { HeaderComponent } from './header/header.component';
import { WheelSizeComponent } from './common/wheel-size/wheel-size.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikeDetailComponent } from './bikes/bike-detail/bike-detail.component';
import { BikeItemComponent } from './bikes/bike-list/bike-item/bike-item.component';
import { CyclistsComponent } from './cyclists/cyclists.component';
import { CyclistListComponent } from './cyclists/cyclist-list/cyclist-list.component';
import { CyclistEditComponent } from './cyclists/cyclist-list/cyclist-edit/cyclist-edit.component';
import { KitComponent } from './kit/kit.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { DropDownDirective } from './shared/directives/dropdown.directive';
import { BasicHighlightDirective } from './shared/directives/basic-hightlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-hightlight.directive';
import { AnotherHighlightDirective } from './shared/directives/another-highlight.directive';
import { FourthHighlightDirective } from './shared/directives/fourth-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';

import { GearCheckService } from './gear-check/gear-check.service';
import { UrlHelperService } from './shared/url-helper.service';
import { CyclistService } from './cyclists/cyclist.service';

import { AppComponent } from './app.component';
import { BikeStartComponent } from './bikes/bike-start/bike-start.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { GearCheck2Component } from './gear-check2/gear-check2.component';

@NgModule({
  declarations: [
    AppComponent,
    GearCheckComponent,
    DropDownDirective,
    GearCheckResultComponent,
    GearCheckCyclistComponent,
    GearCheckBikeComponent,
    DateControlComponent,
    HeaderComponent,
    WheelSizeComponent,
    BikesComponent,
    BikeListComponent,
    BikeDetailComponent,
    BikeItemComponent,
    CyclistsComponent,
    CyclistListComponent,
    CyclistEditComponent,
    KitComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AnotherHighlightDirective,
    FourthHighlightDirective,
    UnlessDirective,
    HomeComponent,
    NotFoundComponent,
    BikeStartComponent,
    BikeEditComponent,
    GearCheck2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GearCheckService, UrlHelperService, CyclistService, AuthService, AuthGuard, BikeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
