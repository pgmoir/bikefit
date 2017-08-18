import { Cyclist } from './../../shared/cyclist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html',
  styleUrls: ['./cyclist-list.component.css']
})
export class CyclistListComponent implements OnInit {
  cyclists: Cyclist[] = [
    new Cyclist('Phil', 'Smith', 'male', 20030715),
    new Cyclist('Sue', 'Smith', 'female', 20050610),
  ];

  constructor() { }

  ngOnInit() {
  }

}
