import { GearCheckModel } from './../../shared/gear-check.model';
import { GearCheckEngineService } from './../../shared/gear-check-engine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-check-result',
  templateUrl: './gear-check-result.component.html',
  styleUrls: ['./gear-check-result.component.css']
})
export class GearCheckResultComponent implements OnInit {

  public result: GearCheckModel;

  constructor(private gearCheckEngineService: GearCheckEngineService) { }

  ngOnInit() {
    // console.log('resyult component');
    // this.result = this.gearCheckEngineService.gearCheckModel;
  }

}
