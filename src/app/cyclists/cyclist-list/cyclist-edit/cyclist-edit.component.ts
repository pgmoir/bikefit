import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import { Cyclist } from '../../../shared/models/cyclist.model';
import { CyclistService } from '../../cyclist.service';

@Component({
  selector: 'app-cyclist-edit',
  templateUrl: './cyclist-edit.component.html',
  styleUrls: ['./cyclist-edit.component.css']
})
export class CyclistEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') cyclistForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Cyclist;

  genders: string[] = ['male', 'female'];

  constructor(private cyclistService: CyclistService) { }

  ngOnInit() {
    this.subscription = this.cyclistService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.cyclistService.getCyclist(index);
          this.cyclistForm.setValue({
            firstname: this.editedItem.firstname,
            lastname: this.editedItem.lastname,
            gender: this.editedItem.gender
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCyclist = new Cyclist(value.firstname, value.lastname, value.gender, 0, '', 0);
    if (this.editMode) {
      this.cyclistService.updateCyclist(this.editedItemIndex, newCyclist);
    } else {
      this.cyclistService.addCyclist(newCyclist);
    }
    this.onClear();
  }

  onDelete() {
    this.cyclistService.deleteCyclist(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.cyclistForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
