import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-check',
  templateUrl: './gear-check.component.html',
  styleUrls: ['./gear-check.component.css']
})
export class GearCheckComponent implements OnInit {
  dateOfBirth: string;
  wheelSize: string;
  chainRingSize: number;
  recommendation: string;
  restriction: number;
  tyreCircumference: number;

  constructor() { }

  ngOnInit() {
    this.dateOfBirth = '26/01/2003';
    this.wheelSize = '700x23';
    this.chainRingSize = 34;
    this.recommendation = '';
  }

  checkGearing() {
    this.restriction = 6.45;
    this.tyreCircumference = 2.099;
    let foundRecommendation = false;

    for (let rearTeeth = 10; rearTeeth < 40; rearTeeth++) {
      const rollout = this.getRollout(rearTeeth);
      if (rollout < this.restriction) {
        this.recommendation = 'The smallest cog on the rear cassette that can be made available on ' +
          'this bike should have ' + rearTeeth + ' teeth.';
        foundRecommendation = true;
        break;
      }
      if (!foundRecommendation) {
        this.recommendation = 'This bike does not seem to be suitable for this cyclist.';
      }
    }

  }

  getRollout(rearTeeth) {
    return this.tyreCircumference * this.chainRingSize / rearTeeth;
  }

}
