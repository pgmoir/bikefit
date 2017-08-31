import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { GearOptionsModel } from './gear-options.model';
import { UrlHelperService } from './../shared/url-helper.service';

@Injectable()
export class GearCheckService {

  private urlCalculateRestrition = 'https://us-central1-youthgearcheck.cloudfunctions.net/calculateRestriction?';
  //private urlCalculateRestrition = 'http://localhost:5000/youthgearcheck/us-central1/calculateRestriction?';

  constructor(private http: Http, private urlHelperService: UrlHelperService) {}

  calculateRestriction(gearOptionsModel: GearOptionsModel) {
    const headers = new Headers({'Content-Type': 'application=/json'});
    const url = this.urlHelperService.getUrl(this.urlCalculateRestrition, gearOptionsModel);
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
