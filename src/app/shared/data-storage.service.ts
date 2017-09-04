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
    const uid = this.authService.getUserIdentifier();
    return this.httpClient.put('https://youthgearcheck.firebaseio.com/' + uid + '/bikes.json?auth=' + token, this.bikeService.getBikes());
  }

  getBikes() {
    let uid = 'demo';
    let authToken = '';
    if (this.authService.getIdToken()) {
      console.log('auth' + this.authService);
      authToken = '?auth=' + this.authService.getIdToken();
      uid = this.authService.getUserIdentifier();
    }
    this.httpClient.get<Bike[]>('https://youthgearcheck.firebaseio.com/' + uid + '/bikes.json' + authToken)
      .map(
      (bikes) => {
        for (const bike of bikes) {
          if (!bike['history']) {
            bike['history'] = [];
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
