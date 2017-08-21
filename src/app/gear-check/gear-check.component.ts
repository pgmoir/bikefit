import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { GearCheckModel } from './gear-check.model';
import { GearOptionsModel } from './gear-options.model';
import { GearCheckService } from './gear-check.service';

import { Bike } from './../shared/models/bike.model';
import { Cyclist } from './../shared/models/cyclist.model';

@Component({
  selector: 'app-gear-check',
  templateUrl: './gear-check.component.html',
  styleUrls: ['./gear-check.component.css']
})
export class GearCheckComponent implements OnInit {
  cyclist: Cyclist;
  bike: Bike;

  largestChainRing: number;
  engineCategory: string;
  recommendation: string;

  engineCategories: string[] = ['GB', 'NL'];
  chainRingSizes: number[] = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];

  gearCheck: GearCheckModel;

  constructor(private gearCheckService: GearCheckService) {  }

  ngOnInit() {
    this.cyclist = new Cyclist('', '', '', 0, '', 0);
    this.bike = new Bike('', '', '','', '', 0);
    this.engineCategory = 'GB';
    this.recommendation = '';
  }

  checkGearing() {
    const options = new GearOptionsModel(this.cyclist, this.bike, this.engineCategory);

    console.log(options);
    this.gearCheckService.calculateRestriction(options)
      .subscribe(
        (data: GearCheckModel) => {
          this.gearCheck = data;
        },
        (error) => console.log(error)
      );
  }
}
