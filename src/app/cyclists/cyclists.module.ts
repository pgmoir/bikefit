import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CyclistsComponent } from './cyclists.component';
import { CyclistListComponent } from './cyclist-list/cyclist-list.component';
import { CyclistEditComponent } from './cyclist-list/cyclist-edit/cyclist-edit.component';
import { SharedModule } from './../shared/shared.module';
import { CyclistsRoutingModule } from './cyclists-routing.module';

@NgModule({
  declarations: [
    CyclistsComponent,
    CyclistListComponent,
    CyclistEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CyclistsRoutingModule,
    SharedModule
  ]
})
export class CyclistsModule { }
