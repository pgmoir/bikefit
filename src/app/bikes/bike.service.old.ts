// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Rx';

// import { AuthService } from './../auth/auth.service';
// import { Bike } from './../shared/models/bike.model';

// @Injectable()
// export class BikeService {
//   bikesChanged = new Subject<Bike[]>();

//   private bikes: Bike[] = [];

//   private isDemoBikesLoaded = false;
//   private isUserBikesLoaded = false;

//   constructor(private authService: AuthService, private httpClient: HttpClient) { }

//   getBikes() {
//     this.checkBikesLoaded();
//     return this.bikes.slice();
//   }

//   getBike(id: string) {
//     return this.bikes.find(b => b.id === id);
//   }

//   addBike(bike: Bike) {
//     this.saveUserBike(bike);
//   }

//   updateBike(bike: Bike) {
//     this.updateUserBike(bike);
//   }

//   deleteBike(id: string) {
//     this.deleteUserBike(id);
//   }

//   // private database loading functions
//   private checkBikesLoaded() {
//     if (!this.isUserBikesLoaded && this.authService.authenticated) {
//       this.loadUserBikes();
//       this.isUserBikesLoaded = true;
//     }
//   }

//   private loadUserBikes() {
//     const user = this.authService.currentUser;
//     const url = `https://youthgearcheck.firebaseio.com/${user.uid}/bikes.json`;
//     this.httpClient.get<Bike[]>(url, { params: new HttpParams().set('auth', user.refreshToken) })
//       .map((bikes: any) => {
//         const newBikes = [];
//         (Object.keys(bikes)).forEach(key => {
//           const newBike: Bike = bikes[key];
//           newBikes.push(newBike);
//         });
//         return newBikes;
//       })
//       .subscribe((bikes: Bike[]) => {
//         this.bikes = bikes;
//         this.bikesChanged.next(this.bikes.slice());
//       });
//   }

//   private saveUserBike(bike: Bike) {
//     const user = this.authService.currentUser;
//     const url = `https://youthgearcheck.firebaseio.com/${user.uid}/bikes.json`;
//     this.httpClient.post(url, bike, { params: new HttpParams().set('auth', user.refreshToken) })
//       .subscribe((response) => {
//         bike.id = response['name'];
//         this.bikes.push(bike);
//         this.bikesChanged.next(this.bikes.slice());
//       });
//   }

//   private deleteUserBike(id: string) {
//     const user = this.authService.currentUser;
//     const url = `https://youthgearcheck.firebaseio.com/${user.uid}/bikes/${id}.json`;
//     this.httpClient.delete(url, { params: new HttpParams().set('auth', user.refreshToken) })
//       .subscribe((response) => {
//         const index = this.bikes.findIndex(b => b.id === id);
//         this.bikes.splice(index, 1);
//         this.bikesChanged.next(this.bikes.slice());
//       });
//   }

//   private updateUserBike(bike: Bike) {
//     const user = this.authService.currentUser;
//     const url = `https://youthgearcheck.firebaseio.com/${user.uid}/bikes/${bike.id}.json`;
//     this.httpClient.put(url, bike, { params: new HttpParams().set('auth', user.refreshToken) })
//       .subscribe((response) => {
//         console.log(response);
//         const index = this.bikes.findIndex(b => b.id === bike.id);
//         this.bikes[index] = bike;
//         this.bikesChanged.next(this.bikes.slice());
//       });
//   }


// }

//   //   new Bike('Sab', 'Alu commute bike',
//   //   'https://i.ebayimg.com/00/s/NTc2WDEwMjQ=/z/epQAAOSw1vlUraCg/$_86.JPG',
//   //   ['Road'], 'Active', '700c/29er', '23mm', [50]),
//   // new Bike('Merida', 'Carbon weekend bike',
//   //   'https://www.wheelies.co.uk/images/products/Merida-Scultura-5000-2017-Road-Bike_95923_1_Supersize.jpg',
//   //   ['Road'], 'Active', '700c/29er', '23mm', [50]),
//   // new Bike('Giant TCR', 'Youth race bike',
//   //   'https://giantcdn-qu2qwwv2de7wv85rz.stackpathdns.com/remote/www.giant-bicycles.com/_upload_uk/bikes/models/xxl/2013/2013_GIANT_TCR_COMPOSITE_2_BLACK.jpg?width=800&height=600&quality=90&mode=none&bgcolor=white',
//   //   ['Road'], 'Active', '700c/29er', '23mm', [50]),
//   // new Bike('Giant Defy', 'Youth race bike',
//   //   'https://i.ebayimg.com/00/s/OTI5WDE2MDA=/z/zEoAAOSwPcVVxnVC/$_1.JPG',
//   //   ['Road'], 'For Sale', '700c/29er', '23mm', [50]),
//   // new Bike('Trek', 'Secondhand race',
//   //   'https://www.wheelies.co.uk/images/products/Merida-Scultura-5000-2017-Road-Bike_95923_1_Supersize.jpg',
//   //   ['Cyclo-cross'], 'Active', '700c/29er', '23mm', [50]),
//   // new Bike('Dolan', 'TCR',
//   //   'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/TNMAAOSwWxNYy75F/$_86.JPG',
//   //   ['Track'], 'Active', '700c/29er', '23mm', [50]),
//   // new Bike('Moda Minor', 'Youth starter road racer',
//   //   'https://static.evanscycles.com/production/bikes/kids-bikes/product-image/484-319/moda-minor-24-2012-kids-road-bike-24-inch-wheel-EV175064-9999-1.jpg',
//   //   ['Road'], 'Sold', '700c/29er', '23mm', [50])

//   // loadDemoBike() {
//   //   console.log('loading');

//   //   // const worxDemo = new Bike('Junior Worx', 'Road and Cycle Cross bike aimed at U8 – U10 riders.',
//   //   // 'http://cdn.mos.bikeradar.imdserve.com/images/news/2014/11/11/1415795477555-1wxd0um2z2e7n-630-354.jpg',
//   //   // ['road', 'cyclocross'], 'demo', '24inch S5', '25mm', [34]);

//   //   // additional properties
//   //   // worxDemo.setAdvancedProperties('Worx hydroformed profiled aliuminium 6061 triple butted',
//   //   //   '24″ wheel', 'Worx tapered aerosection blades aliuminium', 'FSA ZS-4D',
//   //   //   'Microshift R9', 'WORX 7075', 'N/A', 'Microshift Short Reach 9 Speed',
//   //   //   'Tektro Oryx Canti', [11, 32], 9, 'Worx WRT 160', 'Kenda Road Tyre',
//   //   //   'Worx 140mm', 34, 'FSA', 'Worx 340mm Short Drop',
//   //   //   'Custom Junior', 'Worx', 'Wellgo', 600, 'Black & Blue', 8.6);

//   //   // worxDemo.setPurchaseSaleProperties(495, 'new', null);

//   //   // worxDemo.history = [
//   //   //   new BikeEvent(new Date(20151204), 'Purchased from Worx for £495', false, false, 'transaction'),
//   //   //   new BikeEvent(new Date(20160517), 'Punctured front tyre. Replaced inner tube.', false, false, 'repair'),
//   //   //   new BikeEvent(new Date(20160918), 'Replaced handlebar tape', false, false, 'repair')
//   //   // ];

//   //   // this.bikes.push(worxDemo);
//   // }

//   // initialise() {
//   //   // if (!this.authService.isAuthenticated()) {
//   //   //   this
//   //   //   //this.loadDemoBike();
//   //   // }

//   // }


