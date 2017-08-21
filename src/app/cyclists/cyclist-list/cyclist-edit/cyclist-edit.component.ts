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
  @ViewChild('genderInput') genderInputRef: ElementRef;

  @Output() cyclistAdded = new EventEmitter<Cyclist>();

  genders: string[] = ['male', 'female'];

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const firstname = this.firstnameInputRef.nativeElement.value;
    const lastname = this.lastnameInputRef.nativeElement.value;
    const gender = this.genderInputRef.nativeElement.value;
    const newCyclist = new Cyclist(firstname, lastname, gender, 0, '', 0);
    this.cyclistAdded.emit(newCyclist);
  }

}
