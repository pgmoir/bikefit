import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

import { BikeService } from './bike.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
