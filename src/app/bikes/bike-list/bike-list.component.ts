import { Component, OnInit } from '@angular/core';

import { Bike } from './../../shared/bike.model';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  bikes: Bike[] = [
    new Bike('Sab', 'Alu commute bike', 'https://www.wheelies.co.uk/images/products/Merida-Scultura-5000-2017-Road-Bike_95923_1_Supersize.jpg', '700c/29er', '23mm', 50),
    new Bike('Merida', 'Carbon weekend bike', 'https://i.ebayimg.com/00/s/NTc2WDEwMjQ=/z/epQAAOSw1vlUraCg/$_86.JPG', '700c/29er', '23mm', 50),
  ];

  constructor() { }

  ngOnInit() {
  }

}
