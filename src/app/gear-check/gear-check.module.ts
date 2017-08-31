import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GearCheckRoutingModule } from './gear-check-routing.module';

import { GearCheckResultComponent } from './gear-check-result/gear-check-result.component';
import { GearCheckComponent } from './gear-check.component';

@NgModule({
    declarations: [
        GearCheckComponent,
        GearCheckResultComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        GearCheckRoutingModule
    ]
})
export class GearCheckModule {}
