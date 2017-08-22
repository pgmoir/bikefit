import { CyclistService } from '../cyclist.service';
import { Component, OnInit } from '@angular/core';

import { Cyclist } from './../../shared/models/cyclist.model';

@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html',
  styleUrls: ['./cyclist-list.component.css']
})
export class CyclistListComponent implements OnInit {
  cyclists: Cyclist[];

  constructor(private cyclistService: CyclistService) { }

  ngOnInit() {
    this.cyclists = this.cyclistService.getCyclists();
    this.cyclistService.cyclistsChanged.subscribe(
      (cyclists: Cyclist[]) => {
        this.cyclists = cyclists;
      }
    );
  }

}
