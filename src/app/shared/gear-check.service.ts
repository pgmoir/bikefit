import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { GearCheckModel } from './gear-check.model';

@Injectable()

export class GearCheckService {
  constructor(private http: Http) {}

  calculateRestriction(gearCheckModel: GearCheckModel) {
    const headers = new Headers({'Content-Type': 'application=/json'});
    const url = 'https://us-central1-bikefit-24ea3.cloudfunctions.net/calculateRestriction?' +
      'dateOfBirth=' + gearCheckModel.dateOfBirth +
      '&largestGearFront=' + gearCheckModel.largestGearFront +
      '&wheelSize=' + gearCheckModel.wheelSize;
    console.log(url);
    return this.http.get(url,
      {headers: headers})
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
}
