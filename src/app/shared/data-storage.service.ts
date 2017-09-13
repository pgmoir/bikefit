import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { UUID } from 'angular2-uuid';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  storeKit() {
    return;
  }

  storeKitAdv(newId: string, kitadv: any) {
    // const token = this.authService.getIdToken();
    // const uid = this.authService.getUserIdentifier();
    // return this.httpClient.put('https://youthgearcheck.firebaseio.com/' + uid + '/kit/advanced/' + newId + '.json?auth=' + token, kitadv);
  }

  storeKitCore(kitcore: any) {
    // const token = this.authService.getIdToken();
    // const uid = this.authService.getUserIdentifier();
    // return this.httpClient.post('https://youthgearcheck.firebaseio.com/' + uid + '/kit/list.json?auth=' + token, kitcore);

  }



  getKit() {
    // let uid = 'demo';
    // let authToken = '';
    // if (this.authService.getIdToken()) {
    //   console.log(this.authService);
    //   authToken = '?auth=' + this.authService.getIdToken();
    //   uid = this.authService.getUserIdentifier();
    // }
    // this.httpClient.get<any[]>('https://youthgearcheck.firebaseio.com/' + uid + '/kit/list.json' + authToken)
    //   .subscribe(
    //   (kits: any[]) => {
    //     console.log(kits);
    //   }
    //   );
  }

}
