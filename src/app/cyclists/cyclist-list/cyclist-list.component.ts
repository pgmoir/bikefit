import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Cyclist } from './../../shared/models/cyclist.model';
import { CyclistService } from '../cyclist.service';

@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html',
  styleUrls: ['./cyclist-list.component.css']
})
export class CyclistListComponent implements OnInit, OnDestroy {
  cyclists: Cyclist[];
  private cyclistsChangedSub: Subscription;

  constructor(private cyclistService: CyclistService) { }

  ngOnInit() {
    this.cyclists = this.cyclistService.getCyclists();
    this.cyclistsChangedSub = this.cyclistService.cyclistsChanged.subscribe(
      (cyclists: Cyclist[]) => {
        this.cyclists = cyclists;
      }
    );
  }

  onEditItem(index: number) {
    this.cyclistService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.cyclistsChangedSub.unsubscribe();
  }
}
