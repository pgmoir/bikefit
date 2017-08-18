import { Cyclist } from './../../shared/models/cyclist.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gear-check-cyclist',
  templateUrl: './gear-check-cyclist.component.html',
  styleUrls: ['./gear-check-cyclist.component.css']
})
export class GearCheckCyclistComponent implements OnInit {
  @Input() cyclist: Cyclist;

  genders: string[] = ['male', 'female'];

  constructor() { }

  ngOnInit() {
  }

}
