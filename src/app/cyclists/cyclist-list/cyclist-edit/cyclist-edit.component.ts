import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { Cyclist } from '../../../shared/models/cyclist.model';

@Component({
  selector: 'app-cyclist-edit',
  templateUrl: './cyclist-edit.component.html',
  styleUrls: ['./cyclist-edit.component.css']
})
export class CyclistEditComponent implements OnInit {

  @ViewChild('firstnameInput') firstnameInputRef: ElementRef;
  @ViewChild('lastnameInput') lastnameInputRef: ElementRef;

  @Output() cyclistAdded = new EventEmitter<Cyclist>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const firstname = this.firstnameInputRef.nativeElement.value;
    const lastname = this.lastnameInputRef.nativeElement.value;
    const newCyclist = new Cyclist(firstname, lastname, '', 0, '', 0);
    this.cyclistAdded.emit(newCyclist);
  }

}
