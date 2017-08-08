import { OnInit } from '@angular/core';

import { GearCheckModel } from './gear-check.model';

export class GearCheckEngineService {

  gearCheckModel: GearCheckModel;

  initialise(gearCheckModel: GearCheckModel) {
    this.gearCheckModel = gearCheckModel;
    this.gearCheckModel.birthDate = this.getBirthDate();
    this.gearCheckModel.smallestGearRear = 0;
    this.gearCheckModel.rolloutDistance = 0;
  }

  getBirthDate() {
    const year = Number(this.gearCheckModel.dateOfBirth.toString().substr(0, 4));
    const month = Number(this.gearCheckModel.dateOfBirth.toString().substr(4, 2)) - 1;
    const day = Number(this.gearCheckModel.dateOfBirth.toString().substr(6, 2));
    return new Date(year, month, day);
  }

  getAgeAtStartOfYear(nextYear: boolean) {
    const year = new Date().getFullYear();
    const startOfYear = new Date(nextYear ? year + 1 : year, 0, 1);
    const timeDiff = Math.abs(startOfYear.getTime() - this.gearCheckModel.birthDate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
  }

  setGearRatio() {
    this.gearCheckModel.tyreCircumference = 2.099;

    const getRollout = (rearTeeth) => {
        return this.gearCheckModel.tyreCircumference * this.gearCheckModel.largestGearFront / rearTeeth;
    };

    for (let rearTeeth = 10; rearTeeth < 40; rearTeeth++) {
        const rollout = getRollout(rearTeeth);
        if (rollout < this.gearCheckModel.restrictionDistance) {
            this.gearCheckModel.smallestGearRear = rearTeeth;
            this.gearCheckModel.rolloutDistance = rollout;
            break;
        }
    }
  }

  getModelResult() {
    return this.gearCheckModel;
  }

  YouthGB(gearCheckModel: GearCheckModel) {
    const categoryGB = () => {
      if (this.gearCheckModel.ageAtStart < 8) {
        return 'Youth E';
      } else if (this.gearCheckModel.ageAtStart < 10) {
        return 'Youth D';
      } else if (this.gearCheckModel.ageAtStart < 12) {
        return 'Youth C';
      } else if (this.gearCheckModel.ageAtStart < 14) {
        return 'Youth B';
      } else if (this.gearCheckModel.ageAtStart < 16) {
        return 'Youth A';
      } else if (this.gearCheckModel.ageAtStart < 18) {
        return 'Junior';
      } else {
        return 'Not Youth';
      }
    };

    const getRestrictionGB = () => {
      switch (this.gearCheckModel.youthCategory) {
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
    };

    this.initialise(gearCheckModel);
    this.gearCheckModel.ageAtStart = this.getAgeAtStartOfYear(false);
    this.gearCheckModel.youthCategory = categoryGB();
    this.gearCheckModel.restrictionDistance = getRestrictionGB();
    this.setGearRatio();
    return this.getModelResult();
  }

  YouthNL(gearCheckModel: GearCheckModel) {
    const categoryNL = () => {
      if (this.gearCheckModel.ageAtStart < 8) {
        return 'Youth E';
      } else if (this.gearCheckModel.ageAtStart < 10) {
        return 'Youth D';
      } else if (this.gearCheckModel.ageAtStart < 12) {
        return 'Youth C';
      } else if (this.gearCheckModel.ageAtStart < 14) {
        return 'Youth B';
      } else if (this.gearCheckModel.ageAtStart < 16) {
        return 'Youth A';
      } else if (this.gearCheckModel.ageAtStart < 18) {
        return 'Junior';
      } else {
        return 'Not Youth';
      }
    };

    const getRestrictionNL = () => {
      switch (this.gearCheckModel.youthCategory) {
        case 'Youth E':
          return 6.1;
        case 'Youth D':
          return 6.4;
        case 'Youth C':
          return 7.05;
        case 'Youth B':
          return 7.45;
        case 'Youth A':
          return 7.93;
        case 'Junior':
          return 8.93;
        default:
          return 0;
      }
    };

    this.initialise(gearCheckModel);
    this.gearCheckModel.ageAtStart = this.getAgeAtStartOfYear(false);
    this.gearCheckModel.youthCategory = categoryNL();
    this.gearCheckModel.restrictionDistance = getRestrictionNL();
    this.setGearRatio();
    return this.getModelResult();
  }
}
