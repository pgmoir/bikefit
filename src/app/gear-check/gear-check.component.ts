import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { GearCheckModel } from './../shared/gear-check.model';
import { GearCheckService } from './../shared/gear-check.service';

@Component({
  selector: 'app-gear-check',
  templateUrl: './gear-check.component.html',
  styleUrls: ['./gear-check.component.css']
})
export class GearCheckComponent implements OnInit {
  dateOfBirth: string;
  wheelSize: string;
  largestGearFront: number;
  recommendation: string;
  restriction: number;
  tyreCircumference: number;
  category: string;

  constructor(private gearCheckService: GearCheckService) { }

  ngOnInit() {
    this.dateOfBirth = '26/01/2003';
    this.wheelSize = '700x23';
    this.largestGearFront = 34;
    this.recommendation = '';
  }

  checkGearing() {
    const toCheck: GearCheckModel = new GearCheckModel(this.getDateOfBirth(this.dateOfBirth), this.largestGearFront, this.wheelSize);
    console.log(toCheck.dateOfBirth);
    this.gearCheckService.calculateRestriction(toCheck)
      .subscribe(
        (data: GearCheckModel) => {
          console.log(data);

          this.recommendation = 'This rider will ride in category ' + data.youthCategory + '. They are restricted to a rollout length of ' +
          data.restrictionDistance + 'm. The gear on the front has been specified as ' + data.largestGearFront +
          '. The smallest cog on the rear cassette that can be made available on ' +
          'this bike should have ' + data.smallestGearRear + ' teeth. This is based on assumption that the tyre circumference ' +
          'for a 700x23 will be 2.099m, so the rollout on this gear will be ' + data.rolloutDistance.toFixed(3) + 'm.';
        },
        (error) => console.log(error)
      );
  }

  getDateOfBirth(ukDate) {
    const chunks = ukDate.split('/');

    const formattedDate = chunks[2] +
      (chunks[1].length < 2 ? '0' + chunks[1] : chunks[1]) +
      (chunks[0].length < 2 ? '0' + chunks[0] : chunks[0]);

    return parseInt(formattedDate, 10);
  }

}
