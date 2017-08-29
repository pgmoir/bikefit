import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Bike } from './../shared/models/bike.model';
import { Cyclist } from '../shared/models/cyclist.model';
import { CyclistService } from '../cyclists/cyclist.service';

@Injectable()
export class BikeService {
  bikesChanged = new Subject<Bike[]>();

  private bikes: Bike[] = [
    new Bike('Sab', 'Alu commute bike', 'Road', 'Active', 'https://i.ebayimg.com/00/s/NTc2WDEwMjQ=/z/epQAAOSw1vlUraCg/$_86.JPG', '700c/29er', '23mm', 50,
      [new Cyclist('Phil', 'Smith', 'male', 0, '', 0)]),
    new Bike('Merida', 'Carbon weekend bike', 'Road', 'Active',
      'https://www.wheelies.co.uk/images/products/Merida-Scultura-5000-2017-Road-Bike_95923_1_Supersize.jpg', '700c/29er', '23mm', 50,
      [new Cyclist('Phil', 'Smith', 'male', 0, '', 0), new Cyclist('Calum', 'Smith', 'male', 0, '', 0)]),
    new Bike('Giant TCR', 'Youth race bike', 'Road', 'Active',
      'https://giantcdn-qu2qwwv2de7wv85rz.stackpathdns.com/remote/www.giant-bicycles.com/_upload_uk/bikes/models/xxl/2013/2013_GIANT_TCR_COMPOSITE_2_BLACK.jpg?width=800&height=600&quality=90&mode=none&bgcolor=white',
      '700c/29er', '23mm', 50, null),
    new Bike('Giant Defy', 'Youth race bike', 'Road', 'For Sale',
      'https://i.ebayimg.com/00/s/OTI5WDE2MDA=/z/zEoAAOSwPcVVxnVC/$_1.JPG', '700c/29er', '23mm', 50, null),
    new Bike('Trek', 'Secondhand race', 'Cyclo-cross', 'Active',
      'https://www.wheelies.co.uk/images/products/Merida-Scultura-5000-2017-Road-Bike_95923_1_Supersize.jpg', '700c/29er', '23mm', 50, null),
    new Bike('Dolan', 'TCR', 'Track', 'Active', 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/TNMAAOSwWxNYy75F/$_86.JPG', '700c/29er', '23mm', 50, null),
    new Bike('Moda Minor', 'Youth starter road racer', 'Road', 'Sold',
    'https://static.evanscycles.com/production/bikes/kids-bikes/product-image/484-319/moda-minor-24-2012-kids-road-bike-24-inch-wheel-EV175064-9999-1.jpg', '700c/29er', '23mm', 50, null)
  ];

  constructor(private cyclistService: CyclistService) { }

  setBikes(bikes: Bike[]) {
    this.bikes = bikes;
    this.bikesChanged.next(this.bikes.slice());
  }

  getBikes() {
    return this.bikes.slice();
  }

  getBike(index: number) {
    return this.bikes[index];
  }

  addUsersToCyclists(users: Cyclist[]) {
    this.cyclistService.addCyclists(users);
  }

  addBike(bike: Bike) {
    console.log(bike.status);
    this.bikes.push(bike);
    this.bikesChanged.next(this.bikes.slice());
  }

  updateBike(index: number, bike: Bike) {
    this.bikes[index] = bike;
  }

  deleteBike(index: number) {
    this.bikes.splice(index, 1);
    this.bikesChanged.next(this.bikes.slice());
  }
}
