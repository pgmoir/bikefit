import { GearCheckModel } from './gear-check.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

import { GearOptionsModel } from './gear-options.model';
import { UrlHelperService } from './../shared/url-helper.service';

@Injectable()
export class GearCheckService {

  private urlCalculateRestrition = 'https://us-central1-youthgearcheck.cloudfunctions.net/calculateRestriction?';
  //private urlCalculateRestrition = 'http://localhost:5000/youthgearcheck/us-central1/calculateRestriction?';

  constructor(private httpClient: HttpClient, private urlHelperService: UrlHelperService) {}

  calculateRestriction(gearOptionsModel: GearOptionsModel) {
    const headers = new HttpHeaders({'Content-Type': 'application=/json'});
    const url = this.urlHelperService.getUrl(this.urlCalculateRestrition, gearOptionsModel);
    console.log(url);
    return this.httpClient.get<GearCheckModel>(url, {headers: headers})
      .map(
        (gearCheckModel) => {
          return gearCheckModel;
        }
      );
  }
}
