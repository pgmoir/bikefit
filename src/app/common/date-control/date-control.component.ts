import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.css']
})
export class DateControlComponent implements OnInit {

  day: number;
  month: number;
  year: number;

  days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];

  private yearMin: number;
  private yearMax: number;

  constructor() {
    this.yearMin = 2000;
    this.yearMax = 2018;
    for (let i = this.yearMin; i <= this.yearMax; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() { }

}
