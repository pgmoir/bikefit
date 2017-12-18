import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() bikeWasSelected = new EventEmitter<Bike>();

  subscription: Subscription;
  bikes: Bike[] = [
    new Bike('sab-12345', 'Sab', 'Daily commute bike. Getting a little worn but still a good ride', 'https://c1.staticflickr.com/5/4726/38249670505_f5878755fc_b.jpg', [], 'active', '700c/29er', '23mm', []),
    new Bike('trek-12345', 'Trek X2', 'Cross bike', 'https://c1.staticflickr.com/5/4636/39101804752_1fb40fc713_b.jpg', [], 'active', '700c/29er', '25mm', [])
  ];
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
    // this.bikeService.getBikes();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onNewBike() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onBikeSelected(bike: Bike) {
    this.bikeWasSelected.emit(bike);
  }

}
