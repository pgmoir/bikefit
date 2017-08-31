import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeItemComponent } from './bike-list/bike-item/bike-item.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeStartComponent } from './bike-start/bike-start.component';
import { BikesComponent } from './bikes.component';
import { BikesRoutingModule } from './bikes-routing.module';

@NgModule({
  declarations: [
    BikesComponent,
    BikeStartComponent,
    BikeListComponent,
    BikeItemComponent,
    BikeEditComponent,
    BikeDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BikesRoutingModule,
    SharedModule
  ]
})
export class BikesModule {

}
