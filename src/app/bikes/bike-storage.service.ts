import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from './../shared/models/bike.model';

@Injectable()
export class BikeStorageService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // get basic information on all bikes - enough to perform gear check
  getBikes() {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

    const url = `https://youthgearcheck.firebaseio.com/${user.uid}/bikes.json`;
    this.httpClient.get<Bike[]>(url, { params: new HttpParams().set('auth', user.token) })
      .subscribe(
        (bikes: Bike[]) => {
          return bikes;
        }
      );
  }

  storeBike(bike: Bike) {
    const user = this.authService.getUser();
    if (!user) {
      return;
    }

    const url = `https://youthgearcheck.firebaseio.com/${user.uid}/bikes.json`;
    const bikeretu = this.httpClient.post(url, bike, { params: new HttpParams().set('auth', user.token) })
      .subscribe();
    console.log(bikeretu);
    return bikeretu;
  }

}
