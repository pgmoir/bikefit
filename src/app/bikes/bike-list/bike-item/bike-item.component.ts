import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Bike } from './../../../shared/models/bike.model';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.css']
})
export class BikeItemComponent implements OnInit {

  @Input() bike: Bike;
  @Output() bikeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.bikeSelected.emit();
  }

}
