import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Bike } from './../../shared/models/bike.model';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  bikes: Bike[];
  filteredStatus = '*';

  constructor(private bikeService: BikeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('bikes list init');
    // this.subscription = this.bikeService.bikesChanged
    //   .subscribe(
    //     (bikes: Bike[]) => {
    //       this.bikes = bikes;
    //     }
    //   );
    this.bikeService.getBikes();
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  onNewBike() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
