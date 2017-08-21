import { Component, OnInit } from '@angular/core';

import { Cyclist } from './../../shared/models/cyclist.model';

@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html',
  styleUrls: ['./cyclist-list.component.css']
})
export class CyclistListComponent implements OnInit {
  cyclists: Cyclist[] = [
    new Cyclist('Phil', 'Smith', 'male', 2003, 'July', 15),
    new Cyclist('Sue', 'Smith', 'female', 2005, 'June', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onCyclistAdded(cyclist: Cyclist) {
    this.cyclists.push(cyclist);
  }

}
