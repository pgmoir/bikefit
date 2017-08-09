import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { GearOptionsModel } from './gear-options.model';

@Injectable()

export class GearCheckService {
  constructor(private http: Http) {}

  calculateRestriction(gearOptionsModel: GearOptionsModel) {
    // const headers = new Headers({'Content-Type': 'application=/json'});
    // const url = 'https://us-central1-bikefit-24ea3.cloudfunctions.net/calculateRestriction?' +
    //   'dateOfBirth=' + gearOptionsModel.dateOfBirth +
    //   '&gender=' + gearOptionsModel.gender +
    //   '&largestChainRing=' + gearOptionsModel.largestChainRing +
    //   '&wheelSize=' + gearOptionsModel.wheelSize +
    //   '&country=' + gearOptionsModel.country;
    // console.log(url);
    // return this.http.get(url,
    //   {headers: headers})
    //   .map(
    //     (response: Response) => {
    //       const data = response.json();
    //       return data;
    //     }
    //   );
  }
}
