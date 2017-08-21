import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.css']
})
export class DateControlComponent implements OnInit, OnChanges {

  @Input() day: number;
  @Input() month: string;
  @Input() year: number;

  @Output() dateChanged = new EventEmitter<number>();

  valid = false;

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

  ngOnChanges(changes) {
    this.setDateIsValid();
  }

  onSelect() {
    this.setDateIsValid();
  }

  private setDateIsValid() {
    // get default values without updating the public bound properties
    const year = this.year ? this.year : 0;
    const month = this.month ? this.months.indexOf(this.month) + 1 : 0;
    const day = this.day ? this.day : 0;

    const dateValue = year * 10000 + month * 100 + day;

    const minDateValue = this.yearMin * 10000 + 101;
    const maxDateValue = this.yearMax * 10000 + 3112;

    this.valid = dateValue >= minDateValue && dateValue < maxDateValue && this.isDate(year, month, day);

    if (this.valid) {
      this.dateChanged.emit(dateValue);
    }
  }

  private isDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    const convertedDate = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate();
    const givenDate = '' + year + month + day;
    return (givenDate === convertedDate);
  }
}
