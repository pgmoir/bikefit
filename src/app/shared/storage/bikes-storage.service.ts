import { AuthService } from './../../auth/auth.service';
import { BikeHistory } from './../models/bike-history.model';
import { BikeExtra } from './../models/bike-extra.model';
import { Bike } from './../models/bike.model';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BikesStorageService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // get basic information on all bikes - enough to perform gear check
  getBikes() {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

    const url = `https://youthgearcheck.firebaseio.com/${user.uid}/bikes.json`;
    this.httpClient.get(url, { params: new HttpParams().set('auth', user.token) })
      .subscribe(
      (bikes: Bike[]) => {
        return bikes;
      }
      );
  }

  // get advanced details for a single
  getExtra(id: string) {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

  }

  getHistory(id: string) {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

  }

  storeBike(bike: Bike) {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

  }

  storeAdvanced(extra: BikeExtra) {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

  }

  storeHistory(history: BikeHistory) {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

  }
}
