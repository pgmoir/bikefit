import { Component, OnInit } from '@angular/core';

import { Bike } from './../shared/models/bike.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  selectedBike: Bike;

  constructor() { }

  ngOnInit() {
  }

}
