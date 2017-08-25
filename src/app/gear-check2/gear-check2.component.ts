import { CustomValidators } from './../shared/custom-validators';
import { GearOptionsModel } from './../gear-check/gear-options.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gear-check2',
  templateUrl: './gear-check2.component.html',
  styleUrls: ['./gear-check2.component.css']
})
export class GearCheck2Component implements OnInit {

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

  constructor() {
    this.yearMin = 2000;
    this.yearMax = 2018;
    for (let i = this.yearMin; i <= this.yearMax; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.gearCheckForm = new FormGroup({
      'day': new FormControl(this.days[0], [CustomValidators.asyncInvalidDay]),
      'month': new FormControl(this.months[0]),
      'year': new FormControl(this.years[0]),
      'gender': new FormControl(this.genders[0]),
      'rim': new FormControl(this.rims[0]),
      'tyre': new FormControl(this.tyres[0]),
      'chainRing': new FormControl(this.chainRings[0]),
      'engine': new FormControl(this.engines[0])
    });
  }

  checkGearing() {
    console.log(this.gearCheckForm.value);
    // const options = new GearOptionsModel(this.cyclist, this.bike, this.engineCategory);
    // this.gearCheck = new GearCheckModel(options);

    // console.log(options);
    // this.gearCheckService.calculateRestriction(options)
    //   .subscribe(
    //     (data: GearCheckModel) => {
    //       this.gearCheck = data;
    //     },
    //     (error) => {
    //       console.log(error);
    //       this.gearCheck.validResult = false;
    //     }
    //   );
  }
}
