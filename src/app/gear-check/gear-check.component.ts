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
  category: string;

  constructor() { }

  ngOnInit() {
    this.dateOfBirth = '26/01/2003';
    this.wheelSize = '700x23';
    this.chainRingSize = 34;
    this.recommendation = '';
  }

  checkGearing() {
    this.category = this.getCategory(this.dateOfBirth);
    this.restriction = this.getRestriction(this.category);
    this.tyreCircumference = 2.099;
    let foundRecommendation = false;

    for (let rearTeeth = 10; rearTeeth < 40; rearTeeth++) {
      const rollout = this.getRollout(rearTeeth);
      console.log('Teeth: ' + rearTeeth + ' - Rollout: ' + rollout + ' - Restriction: ' + this.restriction);
      if (rollout < this.restriction) {
        this.recommendation = 'This rider will ride in category ' + this.category + '. They are restricted to a rollout length of ' +
          this.restriction + 'm. The smallest cog on the rear cassette that can be made available on ' +
          'this bike should have ' + rearTeeth + ' teeth. This is based on assumption that the tyre circumference for a 700x23 ' +
          'will be 2.099m, so the rollout on this gear will be ' + rollout.toFixed(3) + 'm.';
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

  getCategory(dateOfBirth) {
    const dob = new Date(this.getUsDate(dateOfBirth));
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const timeDiff = Math.abs(startOfYear.getTime() - dob.getTime());
    const diffYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
    if (diffYears < 8) {
      return 'Youth E';
    } else if (diffYears < 10) {
      return 'Youth D';
    } else if (diffYears < 12) {
      return 'Youth C';
    } else if (diffYears < 14) {
      return 'Youth B';
    } else if (diffYears < 16) {
      return 'Youth A';
    } else if (diffYears < 18) {
      return 'Junior';
    } else {
      return 'Not Youth';
    }
  }

  getRestriction(category) {
    switch (category) {
      case 'Youth E':
        return 5.1;
      case 'Youth D':
        return 5.4;
      case 'Youth C':
        return 6.05;
      case 'Youth B':
        return 6.45;
      case 'Youth A':
        return 6.93;
      case 'Junior':
        return 7.93;
      default:
        return 0;
    }
  }

  getUsDate(ukDate) {
    const chunks = ukDate.split('/');
    const formattedDate = chunks[1] + '/' + chunks[0] + '/' + chunks[2];
    return formattedDate;
  }

}
