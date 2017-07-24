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

  constructor() { }

  ngOnInit() {
    this.dateOfBirth = '26/01/2003';
    this.wheelSize = '700x23';
    this.chainRingSize = 34;
  }

}
