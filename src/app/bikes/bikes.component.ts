import { Component, OnInit } from '@angular/core';

import { BikeService } from './bike.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [BikeService]
})
export class BikesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
