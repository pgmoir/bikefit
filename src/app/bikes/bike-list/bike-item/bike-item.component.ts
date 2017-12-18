import { BikeService } from './../../bike.service';
import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { Bike } from './../../../shared/models/bike.model';


@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.css']
})
export class BikeItemComponent implements OnInit {
  @Input() bike: Bike;
  @Output() bikeSelected = new EventEmitter<void>();

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
  }

  onSelected() {
    console.log('onSelected()');
    this.bikeSelected.emit();
  }
}
