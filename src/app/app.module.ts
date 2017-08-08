import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GearCheckComponent } from './gear-check/gear-check.component';
import { GearCheckService } from './shared/gear-check.service';
import { GearCheckEngineService } from './shared/gear-check-engine.service';
import { GearCheckResultComponent } from './gear-check/gear-check-result/gear-check-result.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    GearCheckComponent,
    GearCheckResultComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule
  ],
  providers: [GearCheckService, GearCheckEngineService],
  bootstrap: [AppComponent]
})

export class AppModule { }
