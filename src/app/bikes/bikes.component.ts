import { Component, OnInit } from '@angular/core';

import { Bike } from './../shared/models/bike.model';
import { BikeService } from './bike.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [BikeService]
})
export class BikesComponent implements OnInit {
  selectedBike: Bike;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeService.bikeSelected
      .subscribe(
        (bike: Bike) => {
          this.selectedBike = bike;
        }
      );
  }

}
