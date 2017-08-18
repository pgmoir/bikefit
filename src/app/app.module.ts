import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GearCheckComponent } from './gear-check/gear-check.component';
import { GearCheckService } from './gear-check/gear-check.service';
import { UrlHelperService } from './shared/url-helper.service';
import { DropDownDirective } from './shared/dropdown.directive';
import { DatePickerModule } from 'ng2-datepicker';
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
    CyclistEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule
  ],
  providers: [GearCheckService, UrlHelperService],
  bootstrap: [AppComponent]
})

export class AppModule { }
