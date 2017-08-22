import { Component, OnInit } from '@angular/core';

import { CyclistService } from './cyclist.service';

@Component({
  selector: 'app-cyclists',
  templateUrl: './cyclists.component.html',
  styleUrls: ['./cyclists.component.css']
})
export class CyclistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
