import { Bike } from './../shared/models/bike.model';
import { Cyclist } from './../shared/models/cyclist.model';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { GearCheckModel } from './gear-check.model';
import { GearOptionsModel } from './gear-options.model';
import { GearCheckService } from './gear-check.service';

@Component({
  selector: 'app-gear-check',
  templateUrl: './gear-check.component.html',
  styleUrls: ['./gear-check.component.css']
})
export class GearCheckComponent implements OnInit {
  gender: string;
  wheelSize: string;
  rimSize: string;
  tyreSize: string;
  largestChainRing: number;
  engineCategory: string;
  recommendation: string;
  dateOfBirth: DateModel;
  dobOptions: DatePickerOptions;

  genders: string[] = ['male', 'female'];
  wheelSizes: string[] = ['700x23', '700x25', '700x28', '650x23', '650x25', '650x28'];
  rimSizes: string[] = ['700x23', '700x25', '700x28', '650x23', '650x25', '650x28'];
  tyreSizes: string[] = ['700x23', '700x25', '700x28', '650x23', '650x25', '650x28'];
  engineCategories: string[] = ['GB', 'NL'];
  chainRingSizes: number[] = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];

  constructor(private gearCheckService: GearCheckService) {
    this.dobOptions = new DatePickerOptions(
      {
        style: 'bold',
        locale: 'en-GB',
        initialDate: new Date(2003, 9, 5),
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
    this.gender = 'female';
    this.wheelSize = '700x23';
    this.largestChainRing = 48;
    this.engineCategory = 'GB';
    this.recommendation = '';
  }

  checkGearing() {
    const cyclist: Cyclist = new Cyclist('', '', this.gender, this.getDateOfBirth());
    const bike: Bike = new Bike('', '', '', this.rimSize, this.tyreSize, this.largestChainRing);
    const options = new GearOptionsModel(cyclist, bike, this.engineCategory);

    this.gearCheckService.calculateRestriction(options)
      .subscribe(
        (data: GearCheckModel) => {
          this.recommendation = data.recommendation;
        },
        (error) => console.log(error)
      );
  }

  getDateOfBirth() {
    const formattedDate = this.dateOfBirth.year + this.dateOfBirth.month + this.dateOfBirth.day;
    return parseInt(formattedDate, 10);
  }
}
