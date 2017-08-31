import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GearCheckComponent } from './gear-check.component';

const gearCheckRoutes: Routes = [
    { path: '', component: GearCheckComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(gearCheckRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GearCheckRoutingModule { }
