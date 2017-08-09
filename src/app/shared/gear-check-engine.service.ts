import { GearOptionsModel } from './gear-options.model';
import { OnInit } from '@angular/core';
import _ from 'lodash';

import { GearCheckModel } from './gear-check.model';

export class GearCheckEngineService {

  gearCheckModel: GearCheckModel;

  public getResult(gearOptionsModel: GearOptionsModel) {
    return this['Youth' + gearOptionsModel.country](gearOptionsModel);
  }

  private initialise(gearOptionsModel: GearOptionsModel) {
    this.gearCheckModel = new GearCheckModel(gearOptionsModel);
    this.gearCheckModel.validResult = false;
    this.gearCheckModel.options = gearOptionsModel;
    this.gearCheckModel.birthDate = this.getBirthDate();
    this.gearCheckModel.smallestGear = 0;
    this.gearCheckModel.rolloutDistance = 0;
  }

  private getBirthDate() {
    const dateOfBirth = this.gearCheckModel.options.dateOfBirth.toString();
    const year = Number(dateOfBirth.substr(0, 4));
    const month = Number(dateOfBirth.substr(4, 2)) - 1;
    const day = Number(dateOfBirth.substr(6, 2));
    return new Date(year, month, day);
  }

  private getAgeAtStartOfYear(nextYear: boolean) {
    const year = new Date().getFullYear();
    const startOfYear = new Date(nextYear ? year + 1 : year, 0, 1);
    console.log('startofyear: ' + startOfYear);
    console.log('birthdate: ' + this.gearCheckModel.birthDate);
    const timeDiff = Math.abs(startOfYear.getTime() - this.gearCheckModel.birthDate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
  }

  private getCategory(categories) {
    const age = this.gearCheckModel.ageAtStart;
    const gender = this.gearCheckModel.options.gender;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].hasOwnProperty('ageUnder')) {
        if (age < categories[i].ageUnder &&
          (categories[i].gender === 'any' || categories[i].gender === gender)) {
            console.log(categories[i]);
          return categories[i];
        }
      } else if (categories[i].hasOwnProperty('ageAt')) {
        if (age <= categories[i].ageAt &&
          (categories[i].gender === 'any' || categories[i].gender === gender)) {
          return categories[i];
        }
      }
    }
  }

  private getTyreCircumference(wheelSize: string) {
    const wheelSizes = [
      { wheelSize: '700x23', tyreCircumference: 2.09858 },
      { wheelSize: '700x25', tyreCircumference: 2.11115 },
      { wheelSize: '700x28', tyreCircumference: 2.13000 },
      { wheelSize: '650x23', tyreCircumference: 1.97920 },
      { wheelSize: '650x25', tyreCircumference: 1.99177 },
      { wheelSize: '650x28', tyreCircumference: 2.01062 }
    ];
    return _.find(wheelSizes, (item) => (
      item.wheelSize === wheelSize
    )).tyreCircumference;
  }

  private setGearRatio() {
    this.gearCheckModel.tyreCircumference = this.getTyreCircumference(this.gearCheckModel.options.wheelSize);

    const getRollout = (rearTeeth) => {
        return this.gearCheckModel.tyreCircumference * this.gearCheckModel.options.largestChainRing / rearTeeth;
    };

    for (let rearTeeth = 10; rearTeeth < 40; rearTeeth++) {
        const rollout = getRollout(rearTeeth);
        if (rollout < this.gearCheckModel.restrictionDistance) {
            this.gearCheckModel.smallestGear = rearTeeth;
            this.gearCheckModel.rolloutDistance = rollout;
            break;
        }
    }
  }

  private getModelResult(gearOptionsModel: GearOptionsModel, categories) {
    this.initialise(gearOptionsModel);
    this.gearCheckModel.ageAtStart = this.getAgeAtStartOfYear(false);
    const category = this.getCategory(categories);
    this.gearCheckModel.youthCategory = category.title;
    this.gearCheckModel.restrictionDistance = category.restriction;
    this.setGearRatio();
    this.gearCheckModel.validResult = true;
    return this.gearCheckModel;
  }

  private YouthGB(gearOptionsModel: GearOptionsModel) {
    const categories = [
      { ageUnder: 8, gender: 'any', title: 'Youth E', restriction: 5.1 },
      { ageUnder: 10, gender: 'any', title: 'Youth D', restriction: 5.4 },
      { ageUnder: 12, gender: 'any', title: 'Youth C', restriction: 6.05 },
      { ageUnder: 14, gender: 'any', title: 'Youth B', restriction: 6.45 },
      { ageUnder: 16, gender: 'any', title: 'Youth A', restriction: 6.93 },
      { ageUnder: 18, gender: 'any', title: 'Junior', restriction: 7.93 }
    ];

    return this.getModelResult(gearOptionsModel, categories);
  }

  private YouthNL(gearOptionsModel: GearOptionsModel) {
    const categories = [
      { ageUnder: 8, gender: 'male', title: 'Cat I', restriction: 5.46 },
      { ageUnder: 9, gender: 'female', title: 'Cat I', restriction: 5.46 },
      { ageUnder: 9, gender: 'male', title: 'Cat II', restriction: 5.46 },
      { ageUnder: 10, gender: 'female', title: 'Cat II', restriction: 5.46 },
      { ageUnder: 10, gender: 'male', title: 'Cat III', restriction: 5.78 },
      { ageUnder: 11, gender: 'female', title: 'Cat III', restriction: 5.78 },
      { ageUnder: 11, gender: 'male', title: 'Cat IV', restriction: 5.78 },
      { ageUnder: 12, gender: 'female', title: 'Cat IV', restriction: 5.78 },
      { ageUnder: 12, gender: 'male', title: 'Cat V', restriction: 6.14 },
      { ageUnder: 13, gender: 'female', title: 'Cat V', restriction: 6.14 },
      { ageUnder: 13, gender: 'male', title: 'Cat VI', restriction: 6.14 },
      { ageUnder: 14, gender: 'female', title: 'Cat VI', restriction: 6.14 },
      { ageUnder: 14, gender: 'male', title: 'Cat VII', restriction: 6.55 },
      { ageUnder: 16, gender: 'male', title: 'Nieuwelingen', restriction: 7.01 },
      { ageUnder: 16, gender: 'female', title: 'Nieuwelingen-girls', restriction: 7.01 },
      { ageUnder: 18, gender: 'male', title: 'Junioren-ladies', restriction: 7.93 },
      { ageUnder: 18, gender: 'female', title: 'Nieuwelingen-girls', restriction: 7.93 }
    ];

    return this.getModelResult(gearOptionsModel, categories);
  }
}
