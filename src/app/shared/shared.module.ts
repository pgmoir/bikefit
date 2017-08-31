import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownDirective } from './directives/dropdown.directive';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    DropDownDirective,
    FilterPipe,
    ShortenPipe
  ],
  exports: [
    CommonModule,
    DropDownDirective,
    FilterPipe,
    ShortenPipe
  ]
})
export class SharedModule { }
