import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BikeService } from './../bikes/bike.service';
import { Bike } from './models/bike.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private bikeService: BikeService, private authService: AuthService) { }

  storeBikes() {
    const token = this.authService.getIdToken();
    return this.http.put('https://youthgearcheck.firebaseio.com/bikes.json?auth=' + token, this.bikeService.getBikes());
  }

  getBikes() {
    const token = this.authService.getIdToken();
    this.http.get('https://youthgearcheck.firebaseio.com/bikes.json?auth=' + token)
      .map(
        (response: Response) => {
          const bikes: Bike[] = response.json();
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
