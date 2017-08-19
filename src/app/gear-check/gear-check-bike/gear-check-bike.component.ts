import { Component, OnInit, Input } from '@angular/core';

import { Bike } from './../../shared/models/bike.model';

@Component({
  selector: 'app-gear-check-bike',
  templateUrl: './gear-check-bike.component.html',
  styleUrls: ['./gear-check-bike.component.css']
})
export class GearCheckBikeComponent implements OnInit {

  @Input() bike: Bike;
  
  chainRingSizes: number[] = [
    34, 35, 36, 37, 38, 39, 
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
    50, 52, 52, 53, 54, 55];

  constructor() { }

  ngOnInit() {
  }

  onRimChanged(rim: string) {
    this.bike.rim = rim;
  }

  onTyreChanged(tyre: string) {
    this.bike.tyre = tyre;
  }
}
