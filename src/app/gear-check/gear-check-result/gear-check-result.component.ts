import { Component, OnInit, Input } from '@angular/core';

import { GearCheckModel } from './../gear-check.model';

@Component({
  selector: 'app-gear-check-result',
  templateUrl: './gear-check-result.component.html',
  styleUrls: ['./gear-check-result.component.css']
})
export class GearCheckResultComponent implements OnInit {

  @Input() result: GearCheckModel;

  constructor() { }

  ngOnInit() {
  }

}
