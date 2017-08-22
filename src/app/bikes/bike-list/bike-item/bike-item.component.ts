import { BikeService } from '../../bike.service';
import { Component, OnInit, Input } from '@angular/core';

import { Bike } from './../../../shared/models/bike.model';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.css']
})
export class BikeItemComponent implements OnInit {

  @Input() bike: Bike;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.bikeService.bikeSelected.emit(this.bike);
  }

}
