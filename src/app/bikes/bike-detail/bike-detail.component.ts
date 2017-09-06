import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Bike } from '../../shared/models/bike.model';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit, OnDestroy {
  bike: Bike;
  id: string;
  paramsSubscription: Subscription;

  constructor(private bikeService: BikeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.bike = this.bikeService.getBike(this.id);
        }
      );
  }

  ngOnDestroy() {
    // angular will do this for params - but get into habit on just doing it always
    this.paramsSubscription.unsubscribe();
  }

  // onAddToCyclists() {
  //   this.bikeService.addUsersToCyclists(this.bike.users);
  // }

  onEditBike() {
    this.router.navigate(['edit'], { relativeTo: this.route});

    // alternative more complex route involving going back up a level - not required in this situation
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route});
  }

  onDeleteBike() {
    //this.bikeService.deleteBike(this.id);
    this.router.navigate(['/bikes']);
  }

}
