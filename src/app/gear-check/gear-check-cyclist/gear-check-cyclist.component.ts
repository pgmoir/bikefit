import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-check-cyclist',
  templateUrl: './gear-check-cyclist.component.html',
  styleUrls: ['./gear-check-cyclist.component.css']
})
export class GearCheckCyclistComponent implements OnInit {

  genders: string[] = ['male', 'female'];

  constructor() { }

  ngOnInit() {
  }

}
