import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { GearCheckModel } from './../shared/gear-check.model';
import { GearCheckService } from './../shared/gear-check.service';
import { GearCheckEngineService } from './../shared/gear-check-engine.service';

@Component({
  selector: 'app-gear-check',
  templateUrl: './gear-check.component.html',
  styleUrls: ['./gear-check.component.css']
})
export class GearCheckComponent implements OnInit {
  wheelSize: string;
  largestGearFront: number;
  engineCategory: string;
  recommendation: string;
  restriction: number;
  tyreCircumference: number;
  category: string;
  dateOfBirth: DateModel;
  dobOptions: DatePickerOptions;

  wheelSizes: string[] = [ '700x23', '700x25', '700x27', '650x23', '650x25', '650x27' ];
  engineCategories: string[] = [ 'GB', 'NL' ];
  chainRingSizes: number[] = [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54 ];

  constructor(private gearCheckService: GearCheckService, private gearCheckEngineService: GearCheckEngineService) {
    this.dobOptions = new DatePickerOptions(
      {
        style: 'bold',
        locale: 'en-GB',
        initialDate: new Date(2003, 0, 1),
        format: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
    this.dateOfBirth = new DateModel(
      {
        day: this.dobOptions.initialDate.getDay().toString(),
        month: this.dobOptions.initialDate.getMonth().toString(),
        year: this.dobOptions.initialDate.getFullYear().toString(),
        formatted: null,
        momentObj: null
      }
    );
    this.wheelSize = '700x23';
    this.largestGearFront = 40;
    this.engineCategory = 'GB';
    this.recommendation = '';
  }

  checkGearing() {
    const toCheck: GearCheckModel = new GearCheckModel(this.getDateOfBirth(), this.largestGearFront, this.wheelSize);
    // this.gearCheckService.calculateRestriction(toCheck)
    //   .subscribe(
    //     (data: GearCheckModel) => {
    //       console.log(data);

    //       this.recommendation = 'This rider will ride in category ' + data.youthCategory +
    //      '. They are restricted to a rollout length of ' +
    //       data.restrictionDistance + 'm. The gear on the front has been specified as ' + data.largestGearFront +
    //       '. The smallest cog on the rear cassette that can be made available on ' +
    //       'this bike should have ' + data.smallestGearRear + ' teeth. This is based on assumption that the tyre circumference ' +
    //       'for a 700x23 will be 2.099m, so the rollout on this gear will be ' + data.rolloutDistance.toFixed(3) + 'm.';
    //     },
    //     (error) => console.log(error)
    //   );

    const result = this.gearCheckEngineService['Youth' + this.engineCategory](toCheck);
    this.recommendation = 'This rider in ' + this.engineCategory +
      ' will ride in category ' + result.youthCategory +
      '. They are restricted to a rollout length of ' +
      result.restrictionDistance + 'm. The largest gear (chain ring) on the front has been specified as having ' +
      result.largestGearFront + ' teeth. The smallest cog on the rear cassette that can be made available on ' +
      'this bike should have ' + result.smallestGearRear + ' teeth. This is based on assumption that the tyre circumference ' +
      'for a ' + result.wheelSize + ' wheel will be ' + result.tyreCircumference + 'm, so the rollout on this gear will be ' +
      result.rolloutDistance.toFixed(3) + 'm.';
  }

  getDateOfBirth() {
    const formattedDate = this.dateOfBirth.year + this.dateOfBirth.month + this.dateOfBirth.day;
    return parseInt(formattedDate, 10);
  }
}
