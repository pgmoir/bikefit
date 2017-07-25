import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GearCheckComponent } from './gear-check/gear-check.component';
import { GearCheckService } from './shared/gear-check.service';

@NgModule({
  declarations: [
    AppComponent,
    GearCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GearCheckService],
  bootstrap: [AppComponent]
})

export class AppModule { }
