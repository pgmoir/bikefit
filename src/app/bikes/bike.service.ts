import { EventEmitter, Injectable } from '@angular/core';

import { Bike } from './../shared/models/bike.model';
import { Cyclist } from '../shared/models/cyclist.model';
import { CyclistService } from '../cyclists/cyclist.service';

@Injectable()

export class BikeService {
  bikeSelected = new EventEmitter<Bike>();

  private bikes: Bike[] = [
    new Bike('Sab', 'Alu commute bike', 'https://www.wheelies.co.uk/images/products/Merida-Scultura-5000-2017-Road-Bike_95923_1_Supersize.jpg', '700c/29er', '23mm', 50,
      [new Cyclist('Phil', 'Smith', 'male', 0, '', 0)]),
    new Bike('Merida', 'Carbon weekend bike', 'https://i.ebayimg.com/00/s/NTc2WDEwMjQ=/z/epQAAOSw1vlUraCg/$_86.JPG', '700c/29er', '23mm', 50,
      [new Cyclist('Phil', 'Smith', 'male', 0, '', 0), new Cyclist('Calum', 'Smith', 'male', 0, '', 0), ]),
  ];

  constructor(private cyclistService: CyclistService) { }

  getBikes() {
      return this.bikes.slice();
  }

  getBike(index: number) {
    return this.bikes[index];
  }

  addUsersToCyclists(users: Cyclist[]) {
    this.cyclistService.addCyclists(users);
  }
}
