import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BikeService } from './../bikes/bike.service';
import { Bike } from './models/bike.model';

import { UUID } from 'angular2-uuid';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private bikeService: BikeService, private authService: AuthService) { }

  // getBikes() {
  //   const user = this.authService.getUser();
  //   this.httpClient.get(`https://youthgearcheck.firebaseio.com/${user.uid}/bikes.json?auth=${user.token}`)
  //     .map(
  //       (bikes: any) => {
  //         const newBikes = [];
  //         (Object.keys(bikes)).forEach(k => {
  //           const newBike: Bike = bikes[k];
  //           newBike.id = k;
  //           newBikes.push(newBike);
  //         });
  //         return newBikes;
  //       }
  //     )
  //     .subscribe(
  //       (bikes: Bike[]) => {
  //         this.bikeService.setBikes(bikes);
  //       }
  //     );
  // }

  // storeBikes() {
  //   const user = this.authService.getUser();
  //   return this.httpClient.put(`https://youthgearcheck.firebaseio.com/${user.uid}/bikes.json?auth=${user.token}`, this.bikeService.getBikes());
  // }

  storeKit() {
    return;
  }

  storeKitAdv(newId: string, kitadv: any) {
    const token = this.authService.getIdToken();
    const uid = this.authService.getUserIdentifier();
    return this.httpClient.put('https://youthgearcheck.firebaseio.com/' + uid + '/kit/advanced/' + newId + '.json?auth=' + token, kitadv);
  }

  storeKitCore(kitcore: any) {
    const token = this.authService.getIdToken();
    const uid = this.authService.getUserIdentifier();
    return this.httpClient.post('https://youthgearcheck.firebaseio.com/' + uid + '/kit/list.json?auth=' + token, kitcore);

    // const kit = [
    //   {
    //     core: { brand: 'Nike', color: 'white', type: 'trainer' },
    //     advanced: { style: 'thin', length: 30, purchased: true },
    //     history: [
    //       { date: 20100101, detail: 'bought' },
    //       { date: 20100201, detail: 'sold' }
    //     ]
    //   },
    //   {
    //     core: { brand: 'Adidas', color: 'blue', type: 'trainer' },
    //     advanced: { style: 'medium', length: 30, purchased: true },
    //     history: [
    //       { date: 20100101, detail: 'trade' },
    //       { date: 20100201, detail: 'chuck' }
    //     ]
    //   },
    //   {
    //     core: { brand: 'Reebok', color: 'green', type: 'trainer' },
    //     advanced: { style: 'fat', length: 30, purchased: true },
    //     history: [
    //       { date: 20100101, detail: 'steal' },
    //       { date: 20100201, detail: 'return' }
    //     ]
    //   },
    // ];
    //return this.httpClient.put('https://youthgearcheck.firebaseio.com/' + uid + '/kit-core.json?auth=' + token, kit);
  }



  getKit() {
    let uid = 'demo';
    let authToken = '';
    if (this.authService.getIdToken()) {
      console.log(this.authService);
      authToken = '?auth=' + this.authService.getIdToken();
      uid = this.authService.getUserIdentifier();
    }
    this.httpClient.get<any[]>('https://youthgearcheck.firebaseio.com/' + uid + '/kit/list.json' + authToken)
      .subscribe(
      (kits: any[]) => {
        console.log(kits);
      }
      );
  }

}
