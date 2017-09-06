import { Bike } from './../shared/models/bike.model';
import { GearCheckService } from './../gear-check/gear-check.service';
import { GearCheckModel } from './../gear-check/gear-check.model';
import { GearOptionsModel } from './../gear-check/gear-options.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './../shared/custom-validators';
import { Cyclist } from './../shared/models/cyclist.model';

@Component({
  selector: 'app-gear-check',
  templateUrl: './gear-check.component.html',
  styleUrls: ['./gear-check.component.css']
})
export class GearCheckComponent implements OnInit {

  gearCheckForm: FormGroup;

  days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];
  genders: string[] = ['male', 'female'];
  rims: string[] = [
    '28inch', '27inch', '700c/29er', '650b/27.5', '650c', '26inch mtb', '24inch S5', '24inch E6',
    '24inch Terry', '24inch MTB/BMX', '20inch Recumbent', '20inch Schwinn', '20inch BMX/Recumb', '16inch Brompton'
  ];
  tyres: string[] = [
    '20mm', '23mm', '25mm', '28mm', '32mm', '35mm', '37mm', '38mm', '44mm', '45mm', '50mm', '56mm',
    '1.00"', '1.25"', '1.5"', '1.75"', '1.90"', '1.95"', '2.00"', '2.10"', '2.125"', '2.20"', '2.25"', '2.30"', '2.35"',
    '2.40"', '2.50"', '2.75"', '3.00"', '3.80"', '4.00"', '4.60"', '4.70"', '4.80"', '4.90"'
  ];
  engines: string[] = ['GB', 'NL'];
  chainRings: number[] = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];

  private yearMin: number;
  private yearMax: number;

  gearCheck: GearCheckModel;

  constructor(private gearCheckService: GearCheckService) {
    this.yearMin = 2000;
    this.yearMax = 2018;
    for (let i = this.yearMin; i <= this.yearMax; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.gearCheckForm = new FormGroup({
      'cyclist': new FormGroup({
        'dateOfBirth': new FormGroup({
          'day': new FormControl(this.days[0]),
          'month': new FormControl(this.months[0]),
          'year': new FormControl(this.years[0]),
        }),
        'gender': new FormControl(this.genders[0]),
      }),
      'bike': new FormGroup({
        'wheelSize': new FormGroup({
          'rim': new FormControl('700c/29er'),
          'tyre': new FormControl('23mm'),
        }),
        'chainRing': new FormControl(48),
      }),
      'engine': new FormControl(this.engines[0])
    });
  }

  checkGearing() {
    console.log(this.gearCheckForm.value);
    const options = this.getGearOptionsModel();
    this.gearCheck = new GearCheckModel(options);

    console.log(options);
    this.gearCheckService.calculateRestriction(options)
      .subscribe(
        (data: GearCheckModel) => {
          this.gearCheck = data;
        },
        (error) => {
          console.log(error);
          this.gearCheck.resultStatus = 'error';
        }
      );
  }

  private getGearOptionsModel() {
    const form = this.gearCheckForm.value;
    const cyclist = new Cyclist('', '', form.cyclist.gender, +form.cyclist.dateOfBirth.day, form.cyclist.dateOfBirth.month, +form.cyclist.dateOfBirth.year);
    const bike = new Bike('', '', '', '', [], '', form.bike.wheelSize.rim, form.bike.wheelSize.tyre, [+form.bike.chainRing]);
    const options = new GearOptionsModel(cyclist, bike, form.engine);
    options.dateOfBirth = +this.getDateOfBirth(cyclist);
    return options;
  }

  private getDateOfBirth(cyclist: Cyclist) {
    const year = cyclist.dobYear;
    const month = this.months.indexOf( cyclist.dobMonth) + 1;
    const day = cyclist.dobDay;
    return year * 10000 + month * 100 + day;
  }
}
