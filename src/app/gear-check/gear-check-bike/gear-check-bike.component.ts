import { Component, OnInit, Input } from '@angular/core';

import { Bike } from './../../shared/models/bike.model';

@Component({
  selector: 'app-gear-check-bike',
  templateUrl: './gear-check-bike.component.html',
  styleUrls: ['./gear-check-bike.component.css']
})
export class GearCheckBikeComponent implements OnInit {

  @Input() bike: Bike;
  chainRingSizes: number[] = [47, 48, 49, 50];

  constructor() { }

  ngOnInit() {
    console.log(this.bike);
  }

}
