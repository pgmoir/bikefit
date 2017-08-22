import { BikeService } from '../bike.service';
import { Component, Input, OnInit } from '@angular/core';

import { Bike } from '../../shared/models/bike.model';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {

  @Input() bike: Bike;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
  }

  onAddToCyclists() {
    this.bikeService.addUsersToCyclists(this.bike.users);
  }

}
