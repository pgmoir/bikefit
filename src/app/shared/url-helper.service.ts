import { Injectable } from '@angular/core';

@Injectable()
export class UrlHelperService {

  getUrl = function(baseUrl, obj) {
     return baseUrl + this.serialize(obj, undefined);
  };

  // convert object to querystring
  private serialize = function(obj, prefix) {
    const params = [];
    let property;
    for (property in obj) {
      if (obj.hasOwnProperty(property)) {
        const k = prefix ? prefix + '[' + property + ']' : property;
        const v = obj[property];
        params.push((v !== null && typeof v === 'object') ?
          this.serialize(v, k) :
          encodeURIComponent(k) + '=' + encodeURIComponent(v));
      }
    }
    return params.join('&');
  };

}
