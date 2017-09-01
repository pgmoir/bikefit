import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BikeService } from './../bikes/bike.service';
import { Bike } from './models/bike.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private bikeService: BikeService, private authService: AuthService) { }

  storeBikes() {
    const token = this.authService.getIdToken();
    return this.httpClient.put('https://youthgearcheck.firebaseio.com/bikes.json?auth=' + token, this.bikeService.getBikes());
  }

  getBikes() {
    const token = this.authService.getIdToken();
    this.httpClient.get<Bike[]>('https://youthgearcheck.firebaseio.com/bikes.json?auth=' + token)
      .map(
        (bikes) => {
          for (const bike of bikes) {
            if (!bike['users']) {
              bike['users'] = [];
            }
          }
          return bikes;
        }
      )
      .subscribe(
        (bikes: Bike[]) => {
          this.bikeService.setBikes(bikes);
        }
      );
  }
}
