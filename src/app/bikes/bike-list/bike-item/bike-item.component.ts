import { Component, Input } from '@angular/core';

import { Bike } from './../../../shared/models/bike.model';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.css']
})
export class BikeItemComponent {
  @Input() bike: Bike;
  @Input() index: number;
  
}
